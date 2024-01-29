const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    team_role: String,
    startDate: {
      type: Date,
    },
    endDate: Date,
    technologiesUsed: [
      {
        category: String, // Additional key for categorizing the technology
        name: String,
        description: String,
        proficiency: String,
        version: String,
        documentationLink: String,
      },
    ],
    teamMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model
      },
    ],
    status: {
      type: String,
    },
    current_status: String,
    tasks: [
      {
        title: {
          type: String,
        },
        description: String,
        status: {
          type: String,
          enum: ["Not Started", "In Progress", "Completed"],
          default: "Not Started",
        },
      },
    ],
    client: {
      name: String,
      contactPerson: String,
      contactEmail: String,
    },
    budget: {
      currency: String,
      amount: Number,
    },
    duration: {
      value: Number,
      unit: {
        type: String,
        enum: ["days", "weeks", "months"],
      },
    },
    milestones: [
      {
        title: String,
        description: String,
        dueDate: Date,
      },
    ],
    attachments: [],
    notes: String,
    risks: [
      {
        description: String,
        probability: Number,
        impact: String,
        mitigation: String,
      },
    ],
    feedback: [
      {
        date: Date,
        from: String,
        message: String,
      },
    ],
    projectLinks: [
      {
        title: String,
        url: String,
      },
    ],
    tags: [String],
    privacy: {
      type: String,
      enum: ["Public", "Private"],
      default: "Public",
    },
    completionPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    repository: String,
    deploymentURL: String,
    toolsUsed: [
      {
        category: String, // Additional key for categorizing the tool
        name: String,
        description: String,
        proficiency: String,
        version: String,
        documentationLink: String,
      },
    ],
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    communicationChannels: [
      {
        platform: String,
        link: String,
      },
    ],
    customFields: {
      field1: String,
      field2: Number,
      field3: Boolean,
    },
    main_image: {},
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", projectSchema);

module.exports = Projects;
