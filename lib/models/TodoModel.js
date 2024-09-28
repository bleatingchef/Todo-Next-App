const { default: mongoose } = require("mongoose");

// Define the schema
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true, // Make sure 'timestamps' is plural
});

// Correct usage of mongoose.model()
const TodoModel = mongoose.models.Todo || mongoose.model('Todo', Schema);

export default TodoModel;
