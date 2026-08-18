import mongoose from "mongoose";

const borrowerSchema = new mongoose.Schema(
  {
    borrowerId: {
      type: String,
      required: true
    },

    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    phone: {
      type: String
    }
  },
  { _id: false }
);

const propertySchema = new mongoose.Schema(
  {
    addressLine1: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
      required: true
    },

    zipCode: {
      type: String,
      required: true
    },

    propertyType: {
      type: String,
      enum: [
        "Single Family",
        "Condominium",
        "Townhouse",
        "Multi Family"
      ],
      required: true
    }
  },
  { _id: false }
);

const servicerInformationSchema = new mongoose.Schema(
  {
    servicerId: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    loanSystemId: {
      type: String
    },

    phone: {
      type: String
    }
  },
  { _id: false }
);

const investorInformationSchema = new mongoose.Schema(
  {
    investorId: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    investorType: {
      type: String
    }
  },
  { _id: false }
);

const loanSchema = new mongoose.Schema(
  {
    loanNumber: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    borrower: {
      type: borrowerSchema,
      required: true
    },

    property: {
      type: propertySchema,
      required: true
    },

    originalPrincipal: {
      type: Number,
      required: true,
      min: 0
    },

    interestRate: {
      type: Number,
      required: true,
      min: 0
    },

    loanTerm: {
      type: Number,
      required: true
    },

    paymentAmount: {
      type: Number,
      required: true,
      min: 0
    },

    escrow: {
      type: Number,
      required: true,
      min: 0
    },

    nextPaymentDate: {
      type: Date,
      required: true
    },

    maturityDate: {
      type: Date,
      required: true
    },

    servicerInformation: {
      type: servicerInformationSchema,
      required: true
    },

    investorInformation: {
      type: investorInformationSchema,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Loan", loanSchema);