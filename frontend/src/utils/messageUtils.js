module.exports = {
    getMessageObject: function(type, message) {
        return {
            type: type, // Pode ser 'success', 'error', 'alert', etc.
            message: Array.isArray(message) ? message : [message]
        };
    }
};