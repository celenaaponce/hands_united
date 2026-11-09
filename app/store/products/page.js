
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Palette,
  Hand,
  Volume2,
  Users,
  Globe2,
  Check,
  X,
  ArrowRight,
  Tag,
  Eye,
  GraduationCap,
} from "lucide-react";
import styles from "./page.module.css";
import ZeffyEmbed from "../../../components/zeffyembed/zeffy-embed";

const dictionaryFeatures = [
  {
    icon: Palette,
    title: "Color + Black & White",
    description:
      "Culturally representative illustrations in full color and black and white for coloring and practice.",
  },
  {
    icon: Hand,
    title: "Deaf Language Models",
    description:
      "Watch ASL demonstrated by Deaf language models who share the cultural background represented.",
  },
  {
    icon: Volume2,
    title: "Native-Language Voiceover",
    description:
      "Hear vocabulary in the family's native language to support learning together.",
  },
  {
    icon: Users,
    title: "Culturally Representative",
    description:
      "People, foods, families, and everyday experiences that reflect the community.",
  },
];

const products = [
  {
    id: "spanish-family",
    title: "Spanish Family Signs",
    subtitle: "Spanish • ASL • English",
    languages: ["Spanish"],
    theme: "family",
    type: "dictionary",
    price: 25,
    description:
      "Learn ASL family vocabulary through culturally representative illustrations, Deaf signing demonstrations, and Spanish-language voiceover.",
    features: [
      "Full-color illustrations",
      "Black-and-white coloring pages",
      "Deaf language model from the represented community",
      "Spanish-language voiceover",
      "Culturally representative family illustrations",
      "Spanish, ASL, and English vocabulary",
    ],
    image: "",
    link: "https://www.zeffy.com/en-US/ticketing/family-signs-spanish-asl-english-dictionary-coloring-pages",
  },
  {
    id: "haitian-family",
    title: "Haitian Creole Family Signs",
    subtitle: "Haitian Creole • ASL • English",
    languages: ["Haitian Creole"],
    theme: "family",
    type: "dictionary",
    price: 18,
    description:
      "Explore family vocabulary with culturally representative Haitian illustrations, ASL demonstrations by a Deaf language model from the Haitian community, and Haitian Creole voiceover.",
    features: [
      "Full-color illustrations",
      "Black-and-white dictionary pages",
      "Deaf Haitian language model",
      "Haitian Creole voiceover",
      "Culturally representative family illustrations",
      "Haitian Creole, ASL, and English vocabulary",
    ],
    image: "",
    link: "https://www.zeffy.com/en-US/ticketing/family-signs-haitian-creole-asl-english-dictionary",
  },
  {
    id: "haitian-food",
    title: "Haitian Creole Food Signs",
    subtitle: "Haitian Creole • ASL • English",
    languages: ["Haitian Creole"],
    theme: "food",
    type: "dictionary",
    price: 18,
    description:
      "Learn signs for foods and everyday meals through culturally representative food illustrations, Deaf signing demonstrations, and Haitian Creole voiceover.",
    features: [
      "Full-color food illustrations",
      "Black-and-white dictionary pages",
      "Deaf Haitian language model",
      "Haitian Creole voiceover",
      "Foods reflecting Haitian culture",
      "Haitian Creole, ASL, and English vocabulary",
    ],
    image: "",
    link: "https://www.zeffy.com/en-US/ticketing/food-signs-haitian-creole-asl-english-dictionary", // Add the Food Dictionary Zeffy link here
  },
  {
    id: "chuukese-family",
    title: "Chuukese Family Signs",
    subtitle: "Chuukese • ASL • English",
    languages: ["Chuukese"],
    theme: "family",
    type: "dictionary",
    price: 18,
    description:
      "Build ASL family vocabulary using culturally representative illustrations, Deaf signing demonstrations, and Chuukese-language voiceover.",
    features: [
      "Full-color illustrations",
      "Deaf language model from the represented community",
      "Chuukese-language voiceover",
      "Culturally representative family illustrations",
      "Chuukese, ASL, and English vocabulary",
    ],
    image: "",
    link: "https://www.zeffy.com/en-US/ticketing/family-signs-chuukese-asl-english-dictionary",
  },
  {
    id: "spanish-class",
    title: "Clase de ASL a su propio ritmo",
    subtitle: "Aprenda ASL en español",
    languages: ["Spanish"],
    theme: null,
    type: "class",
    price: null,
    description:
      "Aprenda el lenguaje de señas americano (ASL) en español a su propio ritmo. Incluye 20 horas de material para estudiar cuando usted quiera.",
    features: [
      "20 horas de material",
      "Aprenda a su propio ritmo",
      "Instrucción en español",
      "Acceso a materiales de aprendizaje",
    ],
    image: "",
    link: "https://www.zeffy.com/en-US/ticketing/clase-asincrona",
  },
];

const languageOptions = [
  { key: "Spanish", label: "🇪🇸 Spanish" },
  { key: "Haitian Creole", label: "🇭🇹 Haitian Creole" },
  { key: "Chuukese", label: "🇫🇲 Chuukese" },
];

const themeOptions = [
  { key: "family", label: "👪 Family" },
  { key: "food", label: "🍽️ Food" },
  { key: "chores", label: "🧹 Chores" },
  { key: "schedule", label: "📅 Schedule" },
  { key: "emotions", label: "😊 Emotions" },
];

export default function ProductsPage() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const toggleSelection = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filtered = products.filter((product) => {
    const languageMatch =
      selectedLanguages.length === 0 ||
      selectedLanguages.some((language) =>
        product.languages.includes(language)
      );

    const themeMatch =
      selectedThemes.length === 0 ||
      selectedThemes.includes(product.theme);

    return languageMatch && themeMatch;
  });

  const openProduct = (product) => {
    setActiveProduct(product);
  };

  const closeProduct = () => {
    setActiveProduct(null);
  };

  return (
    <div className={styles.container}>
      <Link href="/store#products" className={styles.backLink}>
        ← Back to Store Page
      </Link>

      {/* =========================
          INTRODUCTION
      ========================= */}

      <section className={styles.intro}>
        <h1 className={styles.title}>
          ASL Dictionaries & Learning Resources
        </h1>

        <h2 className={styles.introHeading}>
          Learn ASL Through Your Language and Culture
        </h2>

        <p className={styles.introDescription}>
          Our multilingual ASL dictionaries are designed for Deaf
          children, families, educators, and community members.
          Each dictionary brings together American Sign Language,
          native-language voiceover, and culturally representative
          illustrations to make learning more meaningful and
          accessible.
        </p>

        <p className={styles.introDescription}>
          These are more than translated vocabulary lists.
          Our resources feature Deaf language models from the
          communities represented, helping families see their
          languages, cultures, and experiences reflected in
          ASL learning materials.
        </p>
      </section>

      {/* =========================
          WHAT MAKES THEM SPECIAL
      ========================= */}

      <section className={styles.featuresSection}>
        <h2>What Makes Our Dictionaries Different?</h2>

        <div className={styles.featureGrid}>
          {dictionaryFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={styles.featureCard}
              >
                <Icon size={36} strokeWidth={1.8} />

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================
          FILTERS
      ========================= */}

      <div className={styles.filtersWrapper}>
        <h2>Explore Our Resources</h2>

        <div className={styles.filters}>
          {/* LANGUAGE */}

          <div className={styles.filterColumn}>
            <p className={styles.filterLabel}>
              Filter by Language:
            </p>

            {languageOptions.map((language) => (
              <label key={language.key}>
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(
                    language.key
                  )}
                  onChange={() =>
                    toggleSelection(
                      language.key,
                      selectedLanguages,
                      setSelectedLanguages
                    )
                  }
                />

                {language.label}
              </label>
            ))}
          </div>

          {/* THEME */}

          <div className={styles.filterColumn}>
            <p className={styles.filterLabel}>
              Filter by Theme:
            </p>

            {themeOptions.map((theme) => (
              <label key={theme.key}>
                <input
                  type="checkbox"
                  checked={selectedThemes.includes(theme.key)}
                  onChange={() =>
                    toggleSelection(
                      theme.key,
                      selectedThemes,
                      setSelectedThemes
                    )
                  }
                />

                {theme.label}
              </label>
            ))}
          </div>

          {/* CLEAR */}

          <div className={styles.clearWrapper}>
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => {
                setSelectedLanguages([]);
                setSelectedThemes([]);
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          PRODUCT GRID
      ========================= */}

      <div className={styles.grid}>
        {filtered.map((product) => (
          <div
            key={product.id}
            className={styles.card}
          >
            {/* PRODUCT IMAGE */}

            {product.image ? (
              <img
                src={product.image}
                alt={`Preview of ${product.title}`}
                className={styles.productImage}
              />
            ) : (
              <div className={styles.productPlaceholder}>
                {product.type === "dictionary" ? (
                  <BookOpen size={54} strokeWidth={1.5} />
                ) : (
                  <GraduationCap
                    size={54}
                    strokeWidth={1.5}
                  />
                )}
              </div>
            )}

            {/* PRODUCT CONTENT */}

            <div className={styles.productContent}>
              <h3>{product.title}</h3>

              <p className={styles.productSubtitle}>
                <Globe2 size={17} />
                {product.subtitle}
              </p>

              {product.theme && (
                <p className={styles.productTheme}>
                  {product.theme === "family"
                    ? "👪 Family Vocabulary"
                    : product.theme === "food"
                    ? "🍽️ Food Vocabulary"
                    : product.theme}
                </p>
              )}

              <p className={styles.productDescription}>
                {product.description}
              </p>

              {/* TOP FEATURES */}

              <div className={styles.productFeatures}>
                {product.features
                  .slice(0, 4)
                  .map((feature) => (
                    <p key={feature}>
                      <Check size={16} />
                      {feature}
                    </p>
                  ))}
              </div>

              {/* PRICE */}

              {product.price > 0 && (
                <p className={styles.price}>
                  ${product.price}
                </p>
              )}

              {/* BUTTON */}

              <button
                type="button"
                className={styles.button}
                onClick={() => openProduct(product)}
              >
                {product.type === "dictionary"
                  ? "Explore Dictionary"
                  : "View Class"}

                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.emptyState}>
          <p>
            No resources match your selected filters.
          </p>

          <button
            type="button"
            className={styles.clearButton}
            onClick={() => {
              setSelectedLanguages([]);
              setSelectedThemes([]);
            }}
          >
            Show All Resources
          </button>
        </div>
      )}

      {/* =========================
          BUNDLE PROMOTION
      ========================= */}

      <section className={styles.bundleSection}>
        <Tag size={32} />

        <h2>Save When You Buy Multiple Dictionaries</h2>

        <p>
          Build your multilingual ASL learning library
          and save when purchasing multiple dictionaries.
        </p>

        <div className={styles.bundleOptions}>
          <p>
            <strong>Buy 2 dictionaries</strong>
            {" "}— Save $4 on each
          </p>

          <p>
            <strong>Buy 3 dictionaries</strong>
            {" "}— Save $5 on each
          </p>
        </div>

        <p className={styles.small}>
          Mix and match languages and themes.
          Use code HU2 or HU3 at checkout.
        </p>
      </section>

      {/* =========================
          PRODUCT MODAL
      ========================= */}

      {activeProduct && (
        <div
          className={styles.modalOverlay}
          onClick={closeProduct}
          role="presentation"
        >
          <div
            className={styles.modalContent}
            role="dialog"
            aria-modal="true"
            aria-label={activeProduct.title}
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}

            <button
              type="button"
              className={styles.closeButton}
              onClick={closeProduct}
              aria-label="Close product details"
            >
              <X size={24} />
            </button>

            {/* TITLE */}

            <h2>{activeProduct.title}</h2>

            <p className={styles.productSubtitle}>
              {activeProduct.subtitle}
            </p>

            {/* PREVIEW IMAGE */}

            {activeProduct.image && (
              <img
                src={activeProduct.image}
                alt={`Preview of ${activeProduct.title}`}
                className={styles.modalImage}
              />
            )}

            {/* DESCRIPTION */}

            <div className={styles.modalDescription}>
              <h3>About This Resource</h3>

              <p>{activeProduct.description}</p>
            </div>

            {/* WHAT IS INCLUDED */}

            <div className={styles.modalFeatures}>
              <h3>What's Included</h3>

              {activeProduct.features.map((feature) => (
                <p key={feature}>
                  <Check size={18} />
                  {feature}
                </p>
              ))}
            </div>

            {/* DICTIONARY BENEFITS */}

            {activeProduct.type === "dictionary" && (
              <div className={styles.learningBenefits}>
                <h3>See It. Watch It. Hear It.</h3>

                <div className={styles.benefitItem}>
                  <Eye size={22} />

                  <div>
                    <strong>See It</strong>

                    <p>
                      Explore culturally representative
                      illustrations in color and black
                      and white.
                    </p>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <Hand size={22} />

                  <div>
                    <strong>Watch It</strong>

                    <p>
                      Learn ASL from Deaf language models
                      who share the represented cultural
                      background.
                    </p>
                  </div>
                </div>

                <div className={styles.benefitItem}>
                  <Volume2 size={22} />

                  <div>
                    <strong>Hear It</strong>

                    <p>
                      Listen to native-language voiceover
                      to support multilingual family
                      learning.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PRICE */}

            {activeProduct.price > 0 && (
              <div className={styles.modalPrice}>
                <strong>
                  ${activeProduct.price}
                </strong>
              </div>
            )}

            {/* ZEFFY CHECKOUT */}

            <div className={styles.checkoutSection}>
              <h3>
                {activeProduct.type === "dictionary"
                  ? "Get Your Dictionary"
                  : "Register for This Class"}
              </h3>

              {activeProduct.link ? (
                <div className={styles.embedWrapper}>
                  <ZeffyEmbed
                    title={activeProduct.title}
                    src={activeProduct.link}
                  />
                </div>
              ) : (
                <p>
                  Purchasing information for this resource
                  will be available soon.
                </p>
              )}
            </div>

            {/* BUNDLE */}

            {activeProduct.type === "dictionary" && (
              <div className={styles.bundleBox}>
                <h3>
                  <Tag size={20} />
                  Multi-Dictionary Savings
                </h3>

                <p>
                  Buy 2 dictionaries → $4 off each
                  (code: HU2)
                </p>

                <p>
                  Buy 3 dictionaries → $5 off each
                  (code: HU3)
                </p>

                <p className={styles.small}>
                  Mix and match languages and themes.
                  Enter your code at checkout.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
