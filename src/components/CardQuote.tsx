import { zenQuotesProps } from "../interface";

function CardQuote({ q, a }: zenQuotesProps) {
    return (
        <div className="card" style={{ boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.6)" }}>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>
                        {q}
                    </p>
                    <footer className="blockquote-footer">
                        {a}
                    </footer>
                </blockquote>
            </div>
        </div>
    );
}

export default CardQuote;
