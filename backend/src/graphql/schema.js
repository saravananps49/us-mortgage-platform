import { buildSchema } from "graphql";
import Loan from "../models/Loan.js";

export const schema = buildSchema(`
  type Borrower {
    borrowerId: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
  }

  type Property {
    addressLine1: String!
    city: String!
    state: String!
    zipCode: String!
    propertyType: String!
  }

  type ServicerInformation {
    servicerId: ID!
    name: String!
    loanSystemId: String
    phone: String
  }

  type InvestorInformation {
    investorId: ID!
    name: String!
    investorType: String
  }

  type Loan {
    id: ID!
    loanNumber: ID!
    borrower: Borrower!
    property: Property!
    originalPrincipal: Float!
    interestRate: Float!
    loanTerm: Int!
    paymentAmount: Float!
    escrow: Float!
    nextPaymentDate: String!
    maturityDate: String!
    servicerInformation: ServicerInformation!
    investorInformation: InvestorInformation!
  }

  type Query {
    loans: [Loan!]!
    loan(loanNumber: ID!): Loan
  }
`);

export const root = {
  loans: async () => {
    return Loan.find();
  },

  loan: async ({ loanNumber }) => {
    return Loan.findOne({ loanNumber });
  }
};