
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase URL or Key');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createDemoUser() {
    const email = 'demo@wingman.com';
    const password = 'wingman_demo_123';

    console.log(`Attempting to create user: ${email}`);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        console.error('Error creating user:', error.message);
    } else {
        console.log('User created successfully!');
        console.log('User:', data.user ? data.user.email : 'No user data returned (maybe email confirmation pending)');

        if (data.session) {
            console.log('Session established (Auto Confirm likely ON).');
        } else {
            console.log('IMPORTANT: If Auto Confirm is OFF in Supabase, you must confirm the email manually.');
        }
    }
}

createDemoUser();
