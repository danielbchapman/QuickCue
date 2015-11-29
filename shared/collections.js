Cues = new Mongo.Collection("cues");
Notes = new Mongo.Collection("notes");

NotesSchema = new SimpleSchema({
	label : {
		type: String,
		label: "Label",
		max: 200
	},
	department : {
		type: String,
		label: "Department",
		max: 64
	},
	description : {
		type: String,
		label: "Description",
		max: 2048,
		optional: true
	},
	created: {
		type: Date,
		label: "Created",
		optional: true
	},
	owner: {
		type: String,
		label: "Owner",
		optional: true
	},
	show: {
		type: String,
		label: "Show",
		optional: true
	},
	completed: {
		type: Boolean,
		label: "Completed",
		optional: true
	}
});

Notes.attachSchema(NotesSchema);