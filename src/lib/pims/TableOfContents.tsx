import { useTranslation } from "react-i18next";


/**
 * Table of contents of the PDF, built from the section headings.
 *
 * Chromium cannot compute the page a heading lands on (no target-counter()), so
 * there are no page numbers: the entries are internal links, which Chromium keeps
 * in the PDF as clickable destinations. The PDF bookmarks give the same structure.
 */
export default function TableOfContents() {
    const { t } = useTranslation("pdf");

    const entries = [
        { id: "pims-pdf-section-numbers", label: t("phone_numbers_section.section_title") },
        { id: "pims-pdf-section-inform", label: `${t("inform_section.title_strong")} ${t("inform_section.title_light")}` },
        { id: "pims-pdf-section-prepare", label: `${t("prepare_section.title_strong")} ${t("prepare_section.title_light")}` },
        { id: "pims-pdf-section-alert", label: `${t("alert_section.title_strong")} ${t("alert_section.title_light")}` },
        { id: "pims-pdf-section-involvement", label: t("involvement_section.title_strong") },
    ];

    return (
        <nav className="pims-pdf__toc" aria-labelledby="pims-pdf-toc-title">
            <h2 id="pims-pdf-toc-title" className="fr-h4">{t("toc.title")}</h2>
            <ol>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <a href={`#${entry.id}`}>{entry.label}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
