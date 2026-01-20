const Content = require('../models/Content');

// @desc    Get all website content
// @route   GET /api/content
// @access  Public
const getContent = async (req, res) => {
    try {
        let content = await Content.findOne();

        if (!content) {
            // If no content exists, return null or empty object
            // The frontend should handle seeding or we can seed here if we had the defaults.
            // For now, we return empty structure which works with the upsert logic.
            return res.status(200).json({});
        }

        res.status(200).json(content);
    } catch (error) {
        const fs = require('fs');
        const path = require('path');
        const logPath = path.join(__dirname, '../backend_errors.log');
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} - GET ERROR: ${error.message}\nStack: ${error.stack}\n\n`;
        fs.appendFileSync(logPath, logMessage);

        res.status(500).json({ message: error.message });
    }
};

// @desc    Update website content (Partial or Full)
// @route   POST /api/content
// @access  Private (should be protected in future)
const updateContent = async (req, res) => {
    try {
        const updateData = req.body;

        // Using findOneAndUpdate with upsert to generic singleton
        // We use $set to update fields provided in body. 
        // Note: For deep merging, frontend usually sends the whole modified object wrapper 
        // or we rely on Mongoose's update logic. With 'type: Object', $set replaces the key.
        // To allow granular updates, standard Mongoose might overwrite nested objects if not careful.
        // HOWEVER, since our FrontEnd Context "updates" the whole state and usually saves the whole state, 
        // sending the entire object (root keys) is safest.

        const content = await Content.findOneAndUpdate(
            {},
            { $set: updateData },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        res.status(200).json(content);
    } catch (error) {
        const fs = require('fs');
        const path = require('path');
        const logPath = path.join(__dirname, '../backend_errors.log');
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp} - POST ERROR: ${error.message}\nStack: ${error.stack}\n\n`;
        fs.appendFileSync(logPath, logMessage);

        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getContent,
    updateContent
};
