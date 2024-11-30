import axios from "axios";
import { zenQuotesProps } from "../interface";
import { useEffect, useState } from "react";

function GetZenQuotes() {
    const [quote, setQuotes] = useState<zenQuotesProps[]>([]);
    const [error, setError] = useState<string>('')

    const fetchQuotes = async () => {
        try {
            const res = await axios.get("https://zenquotes.io/api/quotes/");
            setQuotes(res.data.slice(0, 4));
        } catch (error) {
            setError(error)
            setQuotes([
                {
                    q: "Success is not the key to happiness. Happiness is the key to success.",
                    a: "Albert Schweitzer",
                },
                {
                    q: "Do what you can, with what you have, where you are.",
                    a: "Theodore Roosevelt",
                },
                {
                    q: "Believe you can and you're halfway there.",
                    a: "Theodore Roosevelt",
                },
                {
                    q: "The only way to do great work is to love what you do.",
                    a: "Steve Jobs",
                },
            ]);
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    return { quote, error };
}

export default GetZenQuotes;
