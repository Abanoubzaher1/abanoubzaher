import Head from "next/head";
import styles from "../styles/cardtrade-landing.module.css";

const faqs = [
  {
    question: "Do both people need CardTrade?",
    answer:
      "No. You can still secure a deal when only one person has the app. The initiator sends a secure trade link and both parties are guided through identity checks, payment hold, and delivery confirmation.",
  },
  {
    question: "How does holding payment work?",
    answer:
      "Funds are held in a protected checkout flow until both sides confirm the trade terms were met. If the deal fails validation, the payment is returned and the case is flagged for review.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "CardTrade verifies chat context, deal details, and timestamps. If fraud or non-delivery is detected, payments are reversed according to policy and issue data is retained for escalation.",
  },
  {
    question: "How does shipping insurance work?",
    answer:
      "Every protected shipment includes tracking checks and insurance metadata linked to the transaction record. Claims can be filed directly from the same deal page.",
  },
  {
    question: "Is this like PayPal Goods & Services?",
    answer:
      "It covers payment protection plus verification, built-in risk controls, and card-trade-specific workflows designed for social deals and direct messages.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>CardTrade | Trade with confidence</title>
        <meta
          name="description"
          content="Secure card trading for social deals with verified identities, protected payments, and shipping safeguards."
        />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <header className={styles.topBar}>
            <img src="/logo-cardtrade.svg" alt="CardTrade" className={styles.logo} />
            <button className={styles.primaryButton}>Download CardTrade</button>
          </header>

          <div className={styles.heroGrid}>
            <article>
              <h1>Don’t Get Scammed &amp; Stop Paying Fees.</h1>
              <p>
                Card Trade protects your social deals from start to finish. Never
                send money blindly again.
              </p>
              <ul>
                <li>You don’t always know who you’re dealing with.</li>
                <li>Vouches don’t carry from platform to platform.</li>
                <li>A post-it with a name and date can be easily faked.</li>
                <li>Collectors avoid marketplaces because of high fees.</li>
              </ul>
              <div className={styles.buttonRow}>
                <button className={styles.primaryButton}>Download CardTrade</button>
                <button className={styles.secondaryButton}>How It Works</button>
              </div>
            </article>
            <img
              src="/cardtrade/graphics/hero-tech-frame.svg"
              alt="Futuristic trade card frame"
              className={styles.heroVisual}
            />
          </div>
        </section>

        <section className={styles.comparisonSection}>
          <img
            src="/cardtrade/graphics/compare-panels.svg"
            alt="Comparison cards"
            className={styles.compareGraphic}
          />
          <h2>HOW IT WORKS</h2>
          <p>
            Card Trade brings trust to every deal with verified identities,
            payments held until completion, and built in scam protection,
            reimbursement if something goes wrong.
          </p>
        </section>

        <section className={styles.stepsSection}>
          <img src="/cardtrade/graphics/steps-circuit.svg" alt="Step process" />
          <div className={styles.stepCards}>
            <article>
              <h3>STEP 1</h3>
              <h4>Download CardTrade</h4>
              <p>Get the app on iOS or Android and set up your profile in minutes.</p>
            </article>
            <article>
              <h3>STEP 2</h3>
              <h4>Verify Your Identity</h4>
              <p>Government ID and phone verification ensure every account is tied to a real person.</p>
            </article>
            <article>
              <h3>STEP 3</h3>
              <h4>Secure The Deal</h4>
              <p>Agree to terms, lock the deal, and lock in the payment with optional escrow.</p>
            </article>
          </div>
        </section>

        <section className={styles.protectionSection}>
          <div className={styles.sectionTitle}>Equal Protection for Buyers &amp; Sellers</div>
          <div className={styles.protectionGrid}>
            <ul>
              <li>
                <strong>Trade with confidence</strong>
                <span>Your deal is protected from start to finish.</span>
              </li>
              <li>
                <strong>Know who you’re dealing with</strong>
                <span>Verified users with real profiles and ratings.</span>
              </li>
              <li>
                <strong>Skip the fees</strong>
                <span>Stop losing money to marketplace and PayPal fees.</span>
              </li>
              <li>
                <strong>Your deal is protected</strong>
                <span>Scam protection and shipping insurance included in every deal.</span>
              </li>
            </ul>
            <img src="/cardtrade/graphics/shield-grid.svg" alt="Protection graphic" />
          </div>
          <button className={styles.primaryButton}>Download CardTrade</button>
        </section>

        <section className={styles.testimonialSection}>
          <h2>The Hobby Loves Us</h2>
          <img src="/cardtrade/graphics/testimonial-mesh.svg" alt="Mesh backdrop" />
          <div className={styles.testimonialGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item}>
                <strong>★★★★★</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <span>Nate Surname</span>
                <small>Position, Company name</small>
              </article>
            ))}
          </div>
          <button className={styles.primaryButton}>Download CardTrade</button>
        </section>

        <section className={styles.faqSection}>
          <div>
            <h2>Frequently asked questions</h2>
            <p>
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may still
              have questions (doubts) that can be answered.
            </p>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
            <p className={styles.footerTagline}>
              <strong>Trade with confidence. Not risk.</strong>
              Keep making deals where you already do, just with verified users,
              secure payments, and built in protection.
            </p>
          </div>
          <img src="/cardtrade/graphics/faq-orbit.svg" alt="Question orbit" />
        </section>

        <section className={styles.finalCta}>
          <h2>Scam Protection Guarantee</h2>
          <p>
            Run the deal through Card Trade and you’re protected. Payments can be
            secured until delivery is confirmed, and if anything goes wrong,
            you’re covered.
          </p>
          <button className={styles.primaryButton}>Download CardTrade</button>
          <div className={styles.handoff}>
            <h3>Hand-off Notes</h3>
            <ul>
              <li>Font family: Inter, system-ui fallback.</li>
              <li>
                Color codes: #0B1837, #0B5FA8, #31C3F6, #38D6F7, #8FF2FF,
                #F4F7FF.
              </li>
              <li>Libraries: Next.js only (no animation or interaction plugin used).</li>
              <li>
                Graphics delivered in <code>/public/cardtrade/graphics</code> with editable
                source copies in <code>/public/cardtrade/source</code>.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
