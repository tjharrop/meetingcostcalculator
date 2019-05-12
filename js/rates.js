// JS for the Meeting Cost Calculator

var app = app || {};

app.organizations = {
  core: {
    name: "Core Public Service",
    hideDropdownLabels: 0
  }
};

// Holder for rates from multiple organizations
app.rates = app.rates || {};

// TBS Rates of Pay
// Adapted from,
// https://www.tbs-sct.gc.ca/pubs_pol/hrpubs/coll_agre/rates-taux-eng.asp
app.rates.core = [
  {
    label: "Grade 11/12",
    description: "Clerk Grade 11/12",
    min: "124965",
    median: "134542",
    max: "144521"
  },
  {
    label: "Grade 9/10",
    description: "Clerk Grade 9/10",
    min: "108044",
    median: "120006",
    max: "131969"
  },
  {
    label: "Grade 7/8",
    description: "Clerk Grade 7/8",
    min: "94782",
    median: "105537",
    max: "116292"
  },
  {
    label: "Contractor (Principal) / SES",
    description: "Senior contractor (use for SES)",
    min: "220000",
    median: "260000",
    max: "300000"
  }
];
