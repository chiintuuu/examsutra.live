const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event, context) {
    const { email } = JSON.parse(event.body);

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
        .from('subscribers')
        .insert([{ email: email }]);

    if (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Sorry, something went wrong." })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Thank you! You're on the list." })
    };
};