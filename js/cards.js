namespace("talentReef.Manage.Dashboard.Cards.Data");

talentReef.Manage.Dashboard.Cards.Data = [
	{
		id: 1,
		title: "New Applicants",
		description: "This card shows the total count of new applicants.<br /><br />",
		ajax: [
			{
				name: "dataText",
				hasOptions: [
					{
						name: "hasClientApplicantScreening",
						enabled: true,
						withRights: [
							{
								name: "isScreener",
								enabled: true
							}
						]
					}
				],
				type: "HEAD",
				url : "/applicationservice/applications?prescreenStatus=inPrescreen&stageId=1",
				variable: "X-Total-Count",
				cssClass : "link-prescreen-new"
			},
			{
				name: "dataText",
				hasOptions: [
					{
						name: "hasClientApplicantScreening",
						enabled: false
					}
				],
				type: "GET",
				url : "/applicationservice/applications/{{ userID }}/applicants?stageID=65",
				cssClass : "link-source-new"
			}
		],
		display: {
			icon: '<i class="icon-certificate"></i>',
			labelText: "New Applicants"
		}
	},
	{
		id: 2,
		title: "Reviewed Applicants",
		description: "This card shows the total count of reviewed applicants.",
		attributes: {
			"class" : "link-prescreen-reviewed"
		},
		ajax: [
			{
				name: "dataText",
				type: "HEAD",
				url : "/applicationservice/applications?prescreenStatus=inPrescreen&stageId=65",
				variable: "X-Total-Count"
			}
		],
		display: {
			icon: '<i class="icon-search"></i>',
			labelText: "Reviewed Applicants"
		}
	},
	{
		id: 3,
		title: "Contacted Applicants",
		description: "This card shows the total count of contacted applicants.",
		attributes: {
			"class" : "link-prescreen-contacted"
		},
		ajax: [
			{
				name: "dataText",
				type: "HEAD",
				url : "/applicationservice/applications?prescreenStatus=inPrescreen&stageId=66",
				variable: "X-Total-Count"
			}
		],
		display: {
			icon: '<i class="icon-phone-sign"></i>',
			labelText: "Contacted Applicants"
		}
	},
	{
		id: 4,
		title: "5 Star Assessments",
		description: "This card shows the total count of applicants that have a 5 Star Assessment.",
		attributes: {
			"class" : "link-5star-assessment"
		},
		ajax: [
			{
				name: "dataText",
				hasOptions: [
					{
						name: "hasClientApplicantScreening",
						enabled: true,
						withRights: [
							{
								name: "isScreener",
								enabled: true
							}
						]
					}
				],
				type: "HEAD",
				url : "/applicationservice/applications?prescreenStatus=inPrescreen&stageId=1,65,66&assessment=5",
				variable: "X-Total-Count"
			}
		],
		display: {
			icon: '<i class="icon-star-empty"></i>',
			labelText: "5 Star Assessments"
		}
	},
	{
		id: 5,
		title: "5 Star Posi-Fit",
		description: "This card shows the total count of applicants that have a 5 Star Posi-Fit.",
		attributes: {
			"class" : "link-5star-posifit"
		},
		ajax: [
			{
				name: "dataText",
				hasOptions: [
					{
						name: "hasClientApplicantScreening",
						enabled: true,
						withRights: [
							{
								name: "isScreener",
								enabled: true
							}
						]
					}
				],
				type: "HEAD",
				url : "/applicationservice/applications?prescreenStatus=inPrescreen&stageId=1,65,66&posifit=5",
				variable: "X-Total-Count"
			}
		],
		display: {
			icon: '<i class="icon-star-empty"></i>',
			labelText: "5 Star Posi-Fit"
		}
	}
]
