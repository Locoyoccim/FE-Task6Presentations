import { inspirationProps } from "../interface";
import GetZenQuotes from "../services/GetZenQuotes";
import CardQuote from "./CardQuote";

function SectionInspiration({ tittle }: inspirationProps) {
    const { quote } = GetZenQuotes();

    return (
        <section
            className="inspiration p-2 my-3 card me-2"
            style={{ marginLeft: 210 }}
        >
            <h3 className="px-2 py-2">{tittle}</h3>
            <div className="d-flex gap-3 mb-3">
                {quote.map((item, index) => (
                    <CardQuote key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

export default SectionInspiration;
