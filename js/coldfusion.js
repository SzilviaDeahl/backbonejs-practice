namespace("talentReef.Manage.Dashboard.View");
namespace("talentReef.Manage.Dashboard.Model");

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

$('[data-toggle="tooltip"]').tooltip({ placement: 'bottom' });

//===========================================
// leaving this in one file until minification

talentReef.Manage.Dashboard.CardSelector = Backbone.View.extend({
	el: "#dashboard-add-card-modal",

	initialize: function (options) {
		this.dispatch = options.dispatch;
		this.$cardContainer = this.$el.find('.cards-container');
	},

	events: {
		"click .dashboard-modal-card" : "selectCard",
		"click .dashboard-modal-add-card" : "addCard"
	},

	show: function (cards) {
		var showCard;

		this.$cardContainer.html("");

		for (var i=0; i < cards.length; i++) {
			var ajax = cards[i].ajax;

			showCard = false;

			for (var j=0; j < ajax.length; j++) {
				if (ajax[j].hasOptions) {
					var options = ajax[j].hasOptions
						, option;

					for (var k=0; k < options.length; k++) {
						option = options[k];

						if (logged_manager.CLIENT.OPTIONS[option.name.toUpperCase()] == option.enabled) {
							if (option.withRights && option.withRights.length > 0) {
								var rights = option.withRights
									, right;

								for (var l=0; l < rights.length; l++) {
									right = rights[l];

									if (logged_manager.RIGHTS[right.name.toUpperCase()] == right.enabled) {
										showCard = true;
									}
								}
							} else {
								showCard = true;
							}
						}
					}
				} else {
					showCard = true;
				}
			}

			if (showCard) {
				var c = _.template($("#template-dashboard-modal-card").html()),
					card = c({
						id: cards[i].id,
						title: cards[i].title,
						description: cards[i].description
					});
				this.$cardContainer.append(card);
			}
		}

		this.$el.modal();
	},

	selectCard: function (e) {
		var card = e.currentTarget,
			$card = $(e.currentTarget);

		$card.toggleClass('selected');
	},

	addCard: function (e) {
		var self = this;

		this.$el.modal("hide");

		this.$el.find('.dashboard-modal-card.selected').each(function () {
			self.dispatch.trigger('dashboard.addCard', $(this).data("id"));
		});
	}
});

//===========================================

talentReef.Manage.Dashboard.View = Backbone.View.extend({
	el: "#tab-dashboard",
	elCardContainer : ".dashboard-cards",

	initialize: function (options) {
		this.cardsData = talentReef.Manage.Dashboard.Cards.Data;
		this.dashboardData;
		this.cards = [];

		this.dispatch = _.extend({}, Backbone.Events);
		this.selector = new talentReef.Manage.Dashboard.CardSelector({ dispatch: this.dispatch });

		this.createTryCount = 0;
		this.createTryCountMax = 1;
		this.getDashboards();

		this.listeners();
		this.render();
	},

	createDashboard: function () {
		var self = this;

		$.ajax({
			url: "/userpreferencesservice/users-preferences/" + apiToken.USER_ID + "/dashboards",
			type: "POST",
			dataType: "json",
			global: false,
			contentType: "application/json",
			headers: {	"x-auth-id": apiToken.USER_ID,
						"x-auth-token": apiToken.API_TOKEN },
			success: function (data) {
				self.getDashboards();
			},
			error: function (xhr, ajaxOptions, thrownError) {
				ajaxErrorMessage(xhr, thrownError);
			}
		});
	},

	getDashboards: function () {
		var self = this;

		$.ajax({
			url: "/userpreferencesservice/users-preferences/" + apiToken.USER_ID + "/dashboards",
			type: "GET",
			dataType: "json",
			global: false,
			contentType: "application/json",
			headers: {	"x-auth-id": apiToken.USER_ID,
						"x-auth-token": apiToken.API_TOKEN },
			success: function (data) {
				if (data.length <= 0 && (self.createTryCount < self.createTryCountMax)) {
					self.createTryCount++;
					self.createDashboard();
					return;
				}

				self.dashboardData = data;
				self.loadDashboard(data[0]);
			},
			error: function (xhr, ajaxOptions, thrownError) {
				ajaxErrorMessage(xhr, thrownError);
			}
		});
	},

	loadDashboard: function (dashboard) {
		var self = this;

		$.each(dashboard.cards, function () {
			self.loadCard(this.ID);
		})

		this.render();
	},

	events: {
		"click .dashboard-open-selector" : "openSelector",
		"click .dashboard-edit-cards" : "editCards",
		"click .dashboard-cards .card .remove" : "removeCard",

		"click .dashboard-cards .link-source-new:not(.is-editing)" : "linkSource",

		"click .dashboard-cards .link-prescreen-new:not(.is-editing)" : "linkPrescreen",
		"click .dashboard-cards .link-prescreen-contacted:not(.is-editing)" : "linkPrescreen",
		"click .dashboard-cards .link-prescreen-reviewed:not(.is-editing)" : "linkPrescreen",

		"click .dashboard-cards .link-5star-posifit:not(.is-editing)" : "linkPrescreen",
		"click .dashboard-cards .link-5star-assessment:not(.is-editing)" : "linkPrescreen"

	},

	listeners: function () {
		this.dispatch.on('dashboard.addCard', this.addCard, this);
	},

	getCardData: function(id) {
		return $.grep(this.cardsData, function (e) { return e.id == id; })[0];
	},

	render: function () {
		$(this.elCardContainer).html("");

		for (var i = 0; i < this.cards.length; i++) {
			this.cards[i].attributes["data-index"] = i;
			$(this.elCardContainer).append(this.cards[i].render());
		}

		return this;
	},

	openSelector: function () {
		this.selector.show(this.cardsData);
	},

	update: function () {
		var self = this;

		$.ajax({
			url: "/userpreferencesservice/users-preferences/" + apiToken.USER_ID + "/dashboards/" + this.dashboardData[0].dashboardID,
			type: "PUT",
			dataType: "json",
			data: JSON.stringify(this.dashboardData[0]),
			global: false,
			contentType: "application/json",
			headers: {	"x-auth-id": apiToken.USER_ID,
						"x-auth-token": apiToken.API_TOKEN },
			success: function (data) {

			},
			error: function (xhr, ajaxOptions, thrownError) {
				ajaxErrorMessage(xhr, thrownError);
			}
		});
	},

	loadCard: function (id) {
		var data
			, card;

		data = this.getCardData(id);
		card = new talentReef.UI.Widgets.Card(data);

		if (!card.attributes) {
			card.attributes = {};
			card.attributes.class = "";
		}
		card.attributes.class += " span3 card dashboard-card";
		card.attributes['data-id'] = data.id;

		this.cards.push(card);
	},

	addCard: function (id) {
		var cardJson;

		cardJson = { ID: id };
		this.dashboardData[0].cards.push(cardJson);

		this.update();
		this.loadCard(id);

		this.render();
	},

	removeCard: function (e) {
		e.stopPropagation();

		var index = $(e.currentTarget).closest('.dashboard-card').data('index');

		this.cards.splice(index, 1);
		this.dashboardData[0].cards.splice(index, 1);

		this.update();
		this.render();
	},

	editCards: function () {
		$('.tab-dashboard, .tab-dashboard .panel.card').toggleClass('is-editing');
		$('.dashboard-edit-cards').toggleClass('off');
		// $('.dashboard-open-selector').toggle();
	},

	linkSource: function (e) {
		$('#source-active').trigger('click');
	},

	linkPrescreen: function (e) {
		setBreadcrumbs([{text:'Applicants'},{text:'Pre-screen'}]);
		setCurrentTableName('prescreen');
		setTablebarColor('prescreen');

		$('#btn-table-search').removeClass('active');

		$('#advanced-search')
			.slideUp(General.animationSpeed,
				function()
				{
					General.advancedSearchShowing = false;
				}
		);

		$('.tab-prescreen .filters-container').find('.filter-options li').removeClass('selected');
		$('.tab-prescreen .filters-container').find('input[type="text"]').val('');

		$('.tab-prescreen .filters-container .filter:not(.keyword)').removeClass('open');
		$('.tab-prescreen .filters-container .filter:not(.keyword) .filter-body').hide();

		$('#prescreen-detail').hide();
		$('#prescreen-list').show();

		$('#pre-screen-all', '#main-dropdown').trigger("click");
		showhidejumpto("Pre-screen");

		prescreen.list.reset();

		var filterId
			, cardId = $(e.currentTarget).data('id');

		if ((cardId == 1) || (cardId == 2) || (cardId == 3)) {
			switch (cardId) {
				case 1:
					filterId = 1;
					break;

				case 2:
					filterId = 65;
					break;

				case 3:
					filterId = 66;
					break;
			}

			prescreen.list.filters.add('stageId', filterId);
			$('.filter[data-filter="stageId"]').addClass('open');
			$('.filter[data-filter="stageId"] .filter-body').show();
			$('.filter[data-filter="stageId"] [data-value="' + filterId + '"]').closest('li').addClass('selected');
		} else if ((cardId == 4)) {
			prescreen.list.filters.add('assessment', 5);
			$('.filter[data-filter="assessment"]').addClass('open');
			$('.filter[data-filter="assessment"] .filter-body').show();
			$('.filter[data-filter="assessment"] [data-value="5"]').closest('li').addClass('selected');
		} else if ((cardId == 5)) {
			prescreen.list.filters.add('posiFit', 5);
			$('.filter[data-filter="posiFit"]').addClass('open');
			$('.filter[data-filter="posiFit"] .filter-body').show();
			$('.filter[data-filter="posiFit"] [data-value="5"]').closest('li').addClass('selected');
		}

		prescreen.list.render();
	}
});

$(window).load(function () {
	var dashboard = new talentReef.Manage.Dashboard.View();
});
