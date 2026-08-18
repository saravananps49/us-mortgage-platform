import Loan from "../models/Loan.js";

const dummyLoans = [
  {
    loanNumber: "LN-10000001",

    borrower: {
      borrowerId: "BR-10001",
      firstName: "John",
      lastName: "Anderson",
      email: "john.anderson@example.com",
      phone: "555-0101"
    },

    property: {
      addressLine1: "1250 Market Street",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
      propertyType: "Single Family"
    },

    originalPrincipal: 425000,

    interestRate: 6.25,

    loanTerm: 360,

    paymentAmount: 2616.00,

    escrow: 550.00,

    nextPaymentDate: new Date("2026-09-01"),

    maturityDate: new Date("2056-08-01"),

    servicerInformation: {
      servicerId: "SERV-001",
      name: "Demo Mortgage Servicing",
      loanSystemId: "LMS-10000001",
      phone: "555-1000"
    },

    investorInformation: {
      investorId: "INV-001",
      name: "Demo Mortgage Investor",
      investorType: "Agency"
    }
  },

  {
    loanNumber: "LN-10000002",

    borrower: {
      borrowerId: "BR-10002",
      firstName: "Sarah",
      lastName: "Mitchell",
      email: "sarah.mitchell@example.com",
      phone: "555-0102"
    },

    property: {
      addressLine1: "8700 Lakeview Drive",
      city: "Charlotte",
      state: "NC",
      zipCode: "28202",
      propertyType: "Townhouse"
    },

    originalPrincipal: 350000,

    interestRate: 5.875,

    loanTerm: 360,

    paymentAmount: 2071.00,

    escrow: 425.00,

    nextPaymentDate: new Date("2026-09-01"),

    maturityDate: new Date("2056-08-01"),

    servicerInformation: {
      servicerId: "SERV-001",
      name: "Demo Mortgage Servicing",
      loanSystemId: "LMS-10000002",
      phone: "555-1000"
    },

    investorInformation: {
      investorId: "INV-002",
      name: "Demo Institutional Investor",
      investorType: "Private"
    }
  },

  {
    loanNumber: "LN-10000003",

    borrower: {
      borrowerId: "BR-10003",
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      phone: "555-0103"
    },

    property: {
      addressLine1: "420 Pine Avenue",
      city: "Denver",
      state: "CO",
      zipCode: "80202",
      propertyType: "Condominium"
    },

    originalPrincipal: 525000,

    interestRate: 6.50,

    loanTerm: 360,

    paymentAmount: 3315.00,

    escrow: 625.00,

    nextPaymentDate: new Date("2026-09-01"),

    maturityDate: new Date("2056-08-01"),

    servicerInformation: {
      servicerId: "SERV-002",
      name: "Demo National Servicing",
      loanSystemId: "LMS-10000003",
      phone: "555-2000"
    },

    investorInformation: {
      investorId: "INV-003",
      name: "Demo Mortgage Trust",
      investorType: "Agency"
    }
  }
];

export async function seedLoans() {
  const count = await Loan.countDocuments();

  if (count > 0) {
    console.log("Loans already exist. Seed skipped.");
    return;
  }

  await Loan.insertMany(dummyLoans);

  console.log("Dummy mortgage loans inserted.");
}