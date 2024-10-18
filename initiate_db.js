require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
let supabase;

const initiateDB = async function () {
  try {
    supabase = await createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  initiateDB,
  getSupabase: () => supabase,
};