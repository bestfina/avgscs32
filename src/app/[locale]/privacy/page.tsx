import { useTranslations } from "next-intl";

const Policy = () => {
  const t = useTranslations("privacy");

  return (
    <section className="pt-48 pb-20 lg:pt-40 lg:pb-14 md:pt-32 md:pb-11 x:pt-28 x:pb-10">
      <div className="container">
        <h1 className="mb-xs">{t("title")}</h1>
        <p>{t("intro")}</p>

        <h4>{t("sections.general.title")}</h4>
        <p>{t("sections.general.p1")}</p>
        <p>{t("sections.general.p2")}</p>

        <h4>{t("sections.definitions.title")}</h4>
        <ol>
          <li>
            <strong>{t("sections.definitions.items.automated_processing.title")}</strong> —{" "}
            {t("sections.definitions.items.automated_processing.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.blocking.title")}</strong> —{" "}
            {t("sections.definitions.items.blocking.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.website.title")}</strong> —{" "}
            {t("sections.definitions.items.website.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.data_system.title")}</strong> —{" "}
            {t("sections.definitions.items.data_system.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.deidentification.title")}</strong> —{" "}
            {t("sections.definitions.items.deidentification.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.processing.title")}</strong> —{" "}
            {t("sections.definitions.items.processing.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.operator.title")}</strong> —{" "}
            {t("sections.definitions.items.operator.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.personal_data.title")}</strong> —{" "}
            {t("sections.definitions.items.personal_data.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.user.title")}</strong> —{" "}
            {t("sections.definitions.items.user.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.distribution.title")}</strong> —{" "}
            {t("sections.definitions.items.distribution.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.cross_border.title")}</strong> —{" "}
            {t("sections.definitions.items.cross_border.description")}
          </li>
          <li>
            <strong>{t("sections.definitions.items.destruction.title")}</strong> —{" "}
            {t("sections.definitions.items.destruction.description")}
          </li>
        </ol>

        <h4>{t("sections.processed_data.title")}</h4>
        <ul>
          <li>{t("sections.processed_data.items.name")}</li>
          <li>{t("sections.processed_data.items.email")}</li>
          <li>{t("sections.processed_data.items.phone")}</li>
          <li>{t("sections.processed_data.items.cookies")}</li>
        </ul>

        <h4>{t("sections.purposes.title")}</h4>
        <p>{t("sections.purposes.p1")}</p>
        <p>{t("sections.purposes.p2")}</p>
        <p>{t("sections.purposes.p3")}</p>

        <h4>{t("sections.legal_basis.title")}</h4>
        <p>{t("sections.legal_basis.p1")}</p>
        <p>{t("sections.legal_basis.p2")}</p>

        <h4>{t("sections.processing_order.title")}</h4>
        <ol>
          <li>{t("sections.processing_order.items.security")}</li>
          <li>{t("sections.processing_order.items.no_third_party")}</li>
          <li>{t("sections.processing_order.items.user_update")}</li>
        </ol>

        <h4>{t("sections.cross_border.title")}</h4>
        <p>{t("sections.cross_border.p1")}</p>
        <p>{t("sections.cross_border.p2")}</p>

        <h4>{t("sections.conclusion.title")}</h4>
        <p>{t("sections.conclusion.p1")}</p>
        <p>{t("sections.conclusion.p2")}</p>
        <p>{t("sections.conclusion.p3")}</p>
      </div>
    </section>
  );
};

export default Policy;