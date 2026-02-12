"use client";

import React, { useEffect, useState } from 'react';
import styles from './privacy.module.css';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    const companyName = "Flexy Markets";
    const companyRegNo = "2024-00752";
    const companyAddress = "Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia";
    const companyEmail = "support@flexymarkets.com";
    const companyWebsite = "https://flexymarkets.com";
    const currentPageTitle = "Privacy Policy";

    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main style={{ backgroundColor: '#fff' }}>
            <NavBar />

            <div style={{ paddingTop: '120px' }}> {/* Add padding for fixed header */}
                <div className={styles['privacy-container']}>
                    <h1 className={styles['privacy-title']}>{currentPageTitle}</h1>

                    <div className={styles['privacy-toc']}>
                        <h2>Table of Contents</h2>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#who-we-are">Who we are</a></li>
                            <li><a href="#safeguarding">Safeguarding the confidentiality of your personal information and protecting your privacy</a></li>
                            <li><a href="#what-personal-information">What personal information do we collect</a></li>
                            <li><a href="#job-applicants">Job applicants</a></li>
                            <li><a href="#lawful-basis">Lawful basis for processing your personal information and purposes</a></li>
                            <li><a href="#disclosure">Disclosure of your personal information</a></li>
                            <li><a href="#transfers">Transfers outside of the European Economic Area (EEA)</a></li>
                            <li><a href="#information-collected">Information collected from your use of our services</a></li>
                            <li><a href="#cookies">Cookies</a></li>
                            <li><a href="#consent">How we obtain your consent</a></li>
                            <li><a href="#storage">Storage of your personal information and retention period</a></li>
                            <li><a href="#your-rights">Your rights regarding your personal information</a></li>
                            <li><a href="#opt-out">Choice to opt-out collecting your personal information</a></li>
                            <li><a href="#legal-disclaimer">Legal Disclaimer</a></li>
                            <li><a href="#changes">Changes in this Privacy Policy</a></li>
                            <li><a href="#complaint">If you have a complaint</a></li>
                            <li><a href="#contact">How to contact us</a></li>
                        </ul>
                    </div>

                    <h2 id="introduction" className={styles['privacy-subtitle']}>Introduction</h2>
                    <p>As part of our daily business operations we need to collect personal information from our clients and prospective clients in order to provide them with our products and services and ensure that we can meet their needs when providing these products and services as well as when providing them with the respective information.</p>

                    <p>Your privacy is of utmost importance to us and it is our policy to safeguard and respect the confidentiality of information and the privacy of individuals. This Privacy Policy sets out how {companyName} (the &quot;Company&quot; or &quot;Flexy Markets&quot;) collects, uses and manages your personal information we receive by you or a third party in connection with our provision of services to you or which we collect from your use of our services and/or our website (i.e., {companyWebsite}) and/or any other related websites and applications including, among others, the Company&#39;s Members Area. The Privacy Policy also informs you of your rights with respect to the processing of your personal information.</p>

                    <p>Our Privacy Policy is reviewed regularly to ensure that any new obligations and technologies, changes to our business operations and practices are taken into consideration, as well as that it remains abreast of the changing regulatory environment. Any personal information we hold will be governed by our most recent Privacy Policy.</p>

                    <p>Please note that if you are an existing and/or former employee of the Company, a job applicant, a contractor to the Company or a third party service provider, your personal information will be used in connection with your employment contract, or your contractual relationship.</p>

                    <p>This Privacy Policy applies to the processing activities performed by {companyName} to the personal data of its clients/potential clients, website visitors and employees. This Privacy Policy does not apply to websites operated by any other organisations and/or other third parties.</p>

                    <h2 id="who-we-are" className={styles['privacy-subtitle']}>Who we are</h2>
                    <p>{companyName} is registered with Reg No. - {companyRegNo}, with its registered office at {companyAddress}.</p>

                    <p>{companyName} is part of the Flexy Markets. Each entity of the Flexy Markets has its own separate Privacy Policy. Such entities operate their own websites and as such, if you are interested in learning about how such entities process your personal data, please refer to their corresponding privacy statements which may be found on their specific websites.</p>

                    <h2 id="safeguarding" className={styles['privacy-subtitle']}>Safeguarding the confidentiality of your personal information and protecting your privacy</h2>
                    <p>The Company respects the privacy of any user who accesses its website(s), and it is therefore committed to taking all reasonable steps to safeguard any existing or prospective clients, applicants and website visitors.</p>

                    <p>The Company keeps any clients&#39;/potential clients&#39; personal data in accordance with the applicable data protection laws and regulations.</p>

                    <p>We have the necessary and appropriate technical and organisational measures and procedures in place to ensure that your information remains secured at all times. We regularly train and raise awareness to all of our employees on the importance of maintaining, safeguarding and respecting your personal information and privacy. We regard breaches of individuals&#39; privacy very seriously and will impose appropriate disciplinary measures, including dismissal where necessary. The personal information you provide us with when registering as a user of the Company&#39;s site(s) and/or of its services is classified as registered information, which is protected in several different ways. You can access your registered information after logging in to the Members Area by entering a username and a password that you select. It is your responsibility to make sure that your password is only known to you and not disclosed to anyone else. Registered information is securely stored in a safe location and only authorised personnel have access to it via a username and a password. All personal information is transferred to the Company over a secure 128-bit SSL connection and thus all necessary measures are taken to prevent unauthorised parties from viewing any such information. Personal information provided to the Company that does not classify as registered information is also kept in a safe place and accessible by authorised personnel only via a username and a password.</p>

                    <p>Transmission of information via the internet is not always completely secure but the Company endeavors to protect your personal data by taking serious precautions. Once we have received your information, we will apply procedures and security features to try to prevent unauthorised access.</p>

                    <h2 id="what-personal-information" className={styles['privacy-subtitle']}>What personal information do we collect</h2>
                    <p>In order to open an account with us, you must first complete and submit an application form to us by completing the required information. By completing this application form, you are requested to disclose personal information in order to enable the Company to assess your application and comply with the relevant rules and regulations. The information you provide may also be used by the Company to inform you regarding its services.</p>

                    <p>The information that we may collect from you includes the following:</p>
                    <ul>
                        <li>full name, residential address and contact details (e.g., email address, telephone number, fax etc.);</li>
                        <li>date of birth, place of birth, gender, citizenship;</li>
                        <li>information about your income and wealth, including details about your source of funds, assets and liabilities, bank account information, trading statements, FATCA and CRS information and financial statements;</li>
                        <li>trading account balances, trading activity, your inquiries and our responses;</li>
                        <li>information on whether you hold a prominent public function (PEPs);</li>
                        <li>profession and employment details;</li>
                        <li>authentication data (e.g., signature);</li>
                        <li>location data;</li>
                        <li>trading performance, knowledge and experience;</li>
                        <li>verification information, which includes information necessary to verify your identity such as a passport or driver&#39;s license (examples also include background information we receive about you from public records or from other entities not affiliated with us); furthermore, we may collect other identifiable information such as identification numbers and/or Passport/Tax registration numbers;</li>
                        <li>any other information customarily used to identify you and about your trading experience which is relevant to us providing our services to you;</li>
                        <li>activity and movement on the website.</li>
                    </ul>

                    <p>We obtain this information in a number of ways through your use of our services including through any of our websites, apps, the account opening applications, our demo sign up forms, webinar sign up forms, subscribing to news updates and from information provided in the course of ongoing customer service communications. We may also collect this information about you from third parties such as through publicly available sources. We also keep records of your trading behaviour, including records regarding the following:</p>
                    <ul>
                        <li>products you trade with us and their performance;</li>
                        <li>historical data about the trades and investments you have made including the amount invested;</li>
                        <li>your preference for certain types of products and services.</li>
                    </ul>

                    <p>We may ask for other personal information voluntarily from time to time (for example, through market research or surveys).</p>

                    <p>If you choose not to provide the information we need to fulfil your request for a specific product or service, we may not be able to provide you with the requested product or service.</p>

                    <p>We may record any communications, electronic, by telephone, in person or otherwise, that we have with you in relation to the services we provide to you and our business relationship with you. These recordings will be our sole property and will constitute evidence of the communications between us. Such telephone conversations may be recorded without the use of a warning tone or any other further notice. Further, if you visit any of our offices or premises, we may have CCTV which will record your image.</p>

                    <h3 className={styles['privacy-section-title']}>Unsolicited Personal Information</h3>
                    <p>Where we receive personal information about an individual which is unsolicited by us and not required for the provision of our services, we will securely destroy the information (provided it is lawful and reasonable for us to do so).</p>

                    <p>At Flexy Markets, we use YouTube to host, serve and display our corporate video content as well as market related news. Please read the YouTube Terms of Service and Google Privacy Policy for more information.</p>

                    <h2 id="job-applicants" className={styles['privacy-subtitle']}>Job applicants</h2>
                    <p>Personal data is kept in personnel files or within the Company&#39;s Human Resources systems. We have a separate employee non-disclosure agreement for employees, which will be provided to you upon being recruited. The following types of data may be held by the Company, as appropriate, on relevant individuals:</p>
                    <ul>
                        <li>name, address, phone numbers, date of birth, email address, gender, marital status, etc.;</li>
                        <li>CVs and other information gathered during recruitment;</li>
                        <li>references from former employers;</li>
                        <li>National Insurance numbers;</li>
                        <li>Criminal conviction data;</li>
                        <li>job title, job descriptions and pay grades;</li>
                        <li>conduct issues such as letters of concern and disciplinary proceedings;</li>
                        <li>internal performance information;</li>
                        <li>medical or health history/information;</li>
                        <li>tax codes;</li>
                        <li>terms and conditions of employment;</li>
                        <li>training details.</li>
                    </ul>

                    <p>We may further ask for other personal information as we may consider necessary for the purpose of recruitment.</p>

                    <p>If you are unsuccessful in obtaining employment, we will seek your consent to retaining your data in case other suitable job vacancies arise in the Company for which we think you may wish to apply. You are free to withhold your consent to this and there will be no consequences for withholding consent.</p>

                    <h2 id="lawful-basis" className={styles['privacy-subtitle']}>Lawful basis for processing your personal information and purposes</h2>
                    <p>We may process your personal data on the following bases and for the following purposes:</p>

                    <h3 className={styles['privacy-section-title']}>1. Performance of a contract</h3>
                    <p>We process personal data in order to provide our services and products, as well as information regarding our products and services based on the contractual relationship with our clients (i.e., so as to perform our contractual obligations). In addition, processing of personal data takes place to be able to complete our client on-boarding/acceptance procedures.</p>

                    <p>In view of the above, we need to verify your identity in order to accept you as our client and we will need to use those details in order to effectively manage your trading account with us to ensure that you are getting the best possible service from us. This may include third parties carrying out credit or identity checks on our behalf. The use of your personal information is necessary for us to know who you are as we have a legal obligation to comply with certain Know Your Customer and Customer Due Diligence regulatory obligations.</p>

                    <h3 className={styles['privacy-section-title']}>2. Compliance with a legal obligation</h3>
                    <p>There are a number of legal obligations emanating from the relevant laws to which we are subject as well as statutory requirements (e.g., anti-money laundering laws, financial services laws, corporation laws, privacy laws and tax laws). There are also various supervisory authorities whose laws and regulations we are subject to. Such obligations and requirements impose on us necessary personal data processing activities for credit checks, identity verification, payment processing, compliance with court orders, tax law or other reporting obligations and anti-money laundering controls.</p>

                    <p>These obligations apply at various times, including client on boarding/acceptance, payments and systemic checks for risk management.</p>

                    <h3 className={styles['privacy-section-title']}>3. For the purposes of safeguarding legitimate interests</h3>
                    <p>We process personal data so as to safeguard the legitimate interests pursued by us or by a third party. A legitimate interest is when we have a business or commercial reason to use your information. Despite that, it must not unfairly go against what is right and best for you. Examples of such processing activities include the following:</p>
                    <ul>
                        <li>initiating legal claims and preparing our defense in litigation procedures;</li>
                        <li>means and processes we undertake to provide for the Company&#39;s IT and system security, preventing potential crime, asset security, admittance controls and anti-trespassing measures;</li>
                        <li>setting up CCTV systems (e.g., at our premises for security reasons);</li>
                        <li>measures to manage business and for further developing products and services;</li>
                        <li>sharing your personal data within the Flexy Markets for the purpose of updating/verifying your personal data in accordance with the relevant anti-money laundering compliance framework;</li>
                        <li>risk management.</li>
                    </ul>

                    <h3 className={styles['privacy-section-title']}>4. You have provided your consent</h3>
                    <p>Our storage and use of your personal data is based on your consent (other than for the reasons described or implied in this policy when your consent is not required). You may revoke consent at any time; however, any processing of personal data prior to the receipt of your revocation will not be affected.</p>

                    <h3 className={styles['privacy-section-title']}>5. To assess the appropriateness of our services/products for the Clients</h3>

                    <h3 className={styles['privacy-section-title']}>6. To provide you with products and services, or information about our products and services, and to review your ongoing needs</h3>
                    <p>Once you successfully open a trading account with us, or subscribe to an update or webinar, we will need to use your personal information to perform our services and comply with our obligations to you. It is also in our legitimate interests to ensure that we are providing the best products and services so we may periodically review your needs to ensure that you are getting the benefit of the best possible products and services from us.</p>

                    <h3 className={styles['privacy-section-title']}>7. To help us improve our products and services, including customer services, and develop and market new products and services</h3>
                    <p>We may, from time to time, use personal information provided by you through your use of the services and/or through client surveys to help us improve our products and services. It is in our legitimate interests to use your personal information in this way to ensure the highest standards when providing you with our products and services and to continue to be a market leader in the financial services industry.</p>

                    <p>We track visitor activity and behaviour at our website every time you access the site and the resulting data allow us to provide more effective user support if you need any help or advice using our website. We note that this information cannot be used to identify you.</p>

                    <h3 className={styles['privacy-section-title']}>8. To form a profile about you</h3>
                    <p>We may from time to time use personal information provided by you through your use of the services and/or through client surveys to help us improve our products and services. It is in our legitimate interests to use your personal information in this way to ensure the highest standards when providing you with our products and services and to continue to be a market leader in the financial services industry.</p>

                    <h3 className={styles['privacy-section-title']}>9. To investigate or settle enquiries or disputes</h3>
                    <p>We may need to use personal information collected from you to investigate issues and/or settle disputes with you as it is in our legitimate interests to ensure that issues and/or disputes get investigated and resolved in a timely and efficient manner.</p>

                    <h3 className={styles['privacy-section-title']}>10. To comply with applicable laws, court orders, other judicial process, or the requirements of any applicable regulatory authorities</h3>
                    <p>We may need to use your personal information to comply with any applicable laws and regulations, court orders or other judicial process, or the requirements of any applicable regulatory authority. We do this not only to comply with our legal obligations but because it may also be in our legitimate interest to do so.</p>

                    <h3 className={styles['privacy-section-title']}>11. To send you surveys</h3>
                    <p>From time to time, we may send you surveys as part of our customer feedback process. It is in our legitimate interest to ask for such feedback to try to ensure that we provide our services and products at the highest standards. However, we may, from time to time, also ask you to participate in other surveys and if you agree to participate in other surveys we rely on your consent to use the personal information we collect as part of such survey. All responses to any survey we send out whether for customer feedback or otherwise will be aggregated and depersonalised before survey results are shared with any third parties.</p>

                    <h3 className={styles['privacy-section-title']}>12. Data analysis</h3>
                    <p>Our website pages and e-mails may contain web beacons or pixel tags or any other similar type of data analysis tools that allow us to track receipt of correspondence and to count the number of users that have visited our webpage or opened our correspondence. Why may aggregate your personal information (such as trading history) with the personal information of our other clients on an anonymous basis (that is, with your personal identifiers removed) so that more rigorous statistical analysis of general patterns may lead to us providing better products and services.</p>

                    <p>If your personal information is completely anonymised, we do not require a legal basis as the information will no longer constitute personal information. If your personal information is not in an anonymised form, it is in our legitimate interest to continually evaluate that personal information to ensure that the products and services we provide are relevant to the market.</p>

                    <h3 className={styles['privacy-section-title']}>13. Marketing purposes</h3>
                    <p>We may process your personal information to send you marketing communications by email or phone or other agreed forms (including social media campaigns) to ensure that you are always kept up to date with our latest products and services. If we send you marketing communications, we will either do so based on your consent or if it is in our legitimate interest.</p>

                    <p>We will not disclose your information to any outside parties for the purpose of allowing them to directly market to you.</p>

                    <h3 className={styles['privacy-section-title']}>14. Internal business purposes and record keeping</h3>
                    <p>We may need to process your personal information for internal business and research purposes as well as for record keeping purposes. Such processing is in our own legitimate interests and is required in order to comply with our legal obligations. This may include any communications that we have with you in relation to the services and products we provide to you and our relationship with you. We will also keep records to ensure that you comply with your contractual obligations pursuant to the agreement governing our relationship with you.</p>

                    <h3 className={styles['privacy-section-title']}>15. Legal notifications</h3>
                    <p>Often the law requires us to advise you of certain changes to products or services or laws. We may need to inform you of changes to the terms or the features of our products or services. We need to process your personal information to send you these legal notifications. You will continue to receive this information from us even if you choose not to receive direct marketing information from us.</p>

                    <h3 className={styles['privacy-section-title']}>16. Corporate restructuring</h3>
                    <p>If we undergo a corporate re-structuring or part, or if all of our business is acquired by a third party, we may need to use your personal information in association with that re-structuring or acquisition. Such use may involve sharing your information as part of a due diligence enquiries or disclosures pursuant to legal agreements. It is in our legitimate interest to use your information in this way, provided we comply with any legal/regulatory obligation we have towards you.</p>

                    <h3 className={styles['privacy-section-title']}>17. Physical Security</h3>
                    <p>If you enter any of our premises, we may record your image on our CCTV for security reasons. We may also take your details to keep a record of who has entered our premises on any given day. It is in our legitimate interest to do this to maintain a safe and secure working environment.</p>

                    <h2 id="disclosure" className={styles['privacy-subtitle']}>Disclosure of your personal information</h2>
                    <p>The Company shall not disclose any of its clients&#39; confidential information to a third party, except: (a) to the extent that it is required to do so pursuant to any applicable laws, rules and/or regulations; (b) if there is a duty to the public to disclose; (c) if our legitimate business interests require disclosure; or (d) at your request or with your consent or to Persons described in this policy. The Company will endeavor to make such disclosures on a &#39;need-to-know&#39; basis, unless otherwise instructed by a regulatory authority. Under such circumstances, the Company will notify the third party regarding the confidential nature of any such information.</p>

                    <p>As part of using your personal data for the purposes set out above, the Company may disclose your personal information to the following:</p>
                    <ul>
                        <li>any members of the Flexy Markets, which means that any of our ultimate holding companies and their respective subsidiaries may receive such information;</li>
                        <li>our associates and service providers, for business purposes, including third parties such as business service providers and specialist advisers who have been contracted to provide us with administrative, financial, legal, tax, compliance, insurance, research or other services;</li>
                        <li>business introducers with whom we have a mutual business relationship;</li>
                        <li>business parties, credit providers, courts, tribunals and regulatory authorities as agreed or authorised by law;</li>
                        <li>payment service providers (PSPs) and/or banking institutions in relation to issues raised regarding deposits/withdrawals to/from trading account(s) held with the Company and/or for the purpose of commencing an investigation regarding such matters (e.g., third party deposits);</li>
                        <li>anyone authorised by you.</li>
                    </ul>

                    <p>If the Company discloses your personal information to business parties, such as card processing companies or banks, in order to perform the services requested by clients, such third parties may store your information in order to comply with their legal and other obligations.</p>

                    <p>Generally, we require that organisations outside the Flexy Markets who handle or obtain personal information to acknowledge the confidentiality of this information, undertake to respect any individual&#39;s right to privacy and comply with the all relevant data protection laws and this Privacy Policy. Third party service providers such as credit referencing agencies (if and when applicable) may keep a record of any searches performed on our behalf and may use the search details to assist other companies in performing their searches. Please note that the use of your personal information by external third parties who act as data controllers of your personal information is not covered by this Privacy Policy and is not subject to our privacy standards and procedures.</p>

                    <p>Clients accept and consent that the Company may, from time to time, analyse the data collected while visiting our website(s) or by other means, such as questionnaires, for statistical purposes in order to improve the Company&#39;s business activities.</p>

                    <h2 id="transfers" className={styles['privacy-subtitle']}>Transfers outside of the European Economic Area (EEA)</h2>
                    <p>We may transfer your personal information inside or outside the European Economic Area to other Flexy Markets companies as well as service providers (i.e. Processors). To the extent we transfer your information outside the EEA, we will ensure that the transfer is lawful and that Processors in third countries are obligated to comply with the European data protection laws or other countries&#39; laws which are comparable and to provide appropriate safeguards in relation to the transfer of your data in accordance with GDPR Article 46. If we make transfers to processors in the USA, we may in some cases rely on applicable standard contractual clauses, binding corporate rules, or any other equivalent applicable safeguarding arrangements.</p>

                    <p>In view of the above, your personal information may be processed by staff in the Flexy Markets operating inside or outside the EEA who work for us, another Flexy Markets entity or for one of our service providers. Such staff may be, among others, engaged in the fulfilment of your requests, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing and processing. The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.</p>

                    <h2 id="information-collected" className={styles['privacy-subtitle']}>Information collected from your use of our services</h2>
                    <p>Tracking systems used on the Company&#39;s website(s) may collect your personal data in order to optimise the services provided to clients/potential clients. The website collects information in the following ways:</p>

                    <h3 className={styles['privacy-section-title']}>Device information</h3>
                    <p>By recognising your device used to access and use the Company&#39;s website(s), we can provide you with the most appropriate version of our website(s).</p>

                    <h3 className={styles['privacy-section-title']}>Log information</h3>
                    <p>Logging certain behaviors on the site enables the company to track user action and therefore troubleshoot any issues that may occur.</p>

                    <h3 className={styles['privacy-section-title']}>Location information</h3>
                    <p>Using your IP address helps us localize our website content, which we provide to you based on your country, and improve your user experience on our site(s).</p>

                    <h3 className={styles['privacy-section-title']}>Cookies</h3>
                    <p>Cookies are text files with a small amount of data sent from our website(s) to your browser and stored on your computer&#39;s hard drive. Cookies help us improve the performance of our website(s) and our website visitors&#39; experience, track your referrer and improve our future advertising campaigns.</p>

                    <h3 className={styles['privacy-section-title']}>Local storage</h3>
                    <p>You must submit verification documents to us through the Company&#39;s Members Area in order to activate your trading account. These documents are transmitted over a secure 128-bit SSL connection and stored in a safe location.</p>

                    <h2 id="cookies" className={styles['privacy-subtitle']}>Cookies</h2>
                    <p>Internet cookies are small pieces of data sent from our website(s) to your browser and stored on your computer&#39;s hard drive when using our website(s), and they may include a unique identification number. The purpose of collecting this information is to provide you with a more relevant and effective experience on our website(s), including the presentation of our web pages according to your needs or preferences.</p>

                    <p>Cookies are frequently used on many websites on the internet, and you can choose if and how a cookie will be accepted by changing your preferences and options in your browser. You may not be able to access some parts of our website(s) if you choose to disable the cookie acceptance in your browser, particularly in the Company&#39;s Members Area and other secure parts of our website(s). We therefore recommend you to enable cookie acceptance in order to benefit from all our online services.</p>

                    <p>Furthermore, we use cookies for re-marketing features in order to allow us to reach out to users who have previously visited our website(s) and have shown an interest in our products and services. Periodically, we may use third party vendors, such as Google and AdRoll, to display our ads over the internet to you, based on your previous use of our website(s). You can opt out this particular use of cookies at any time by visiting Google&#39;s Ads Settings page and the DoubleClick opt-out page or as they later update those facilities.</p>

                    <p>The Company uses session ID cookies and persistent cookies. A session ID cookie expires after a set amount of time or when the browser window is closed. A persistent cookie remains on your hard drive for an extended time period. You can remove persistent cookies by following directions provided in your web browser&#39;s &#39;Help&#39; file.</p>

                    <p>For further details about our cookie policy and how our cookies work, read our Cookies Policy here.</p>

                    <h2 id="consent" className={styles['privacy-subtitle']}>How we obtain your consent</h2>
                    <p>Where our use of your personal information requires your consent, such consent will be provided in accordance with the express written terms which govern our business relationship (which are available on our website(s) as amended from time to time).</p>

                    <p>If we rely on your consent as our legal basis for holding and processing your personal information, you have the right to withdraw that consent at any time by contacting us using the contact details set out in this Privacy Policy.</p>

                    <h2 id="storage" className={styles['privacy-subtitle']}>Storage of your personal information and retention period</h2>
                    <p>Safeguarding the privacy of your information is of utmost importance to us, whether you interact with us personally, by phone, by mail, over the internet or any other electronic medium. We will hold personal information, for as long as we have a business relationship with you, in a combination of secure computer storage facilities and paper-based files and other records and we take the necessary measures to protect the personal information we hold from misuse, loss, unauthorised access, modification or disclosure.</p>

                    <p>When we consider that personal information is no longer necessary for the purpose for which it was collected, we will remove any details that will identify you or we will securely destroy the records. However, we may need to maintain records for a significant period of time. For example, we are subject to certain anti-money laundering laws which require us to retain the following, for a period of five (5) years after our business relationship with you has ended:</p>
                    <ul>
                        <li>a copy of the documents we used in order to comply with our customer due diligence obligations;</li>
                        <li>supporting evidence and records of transactions with you and your relationship with us.</li>
                    </ul>

                    <p>Also, the personal information we hold in the form of a recorded communication, by telephone, electronically, in person or otherwise, will be held in line with local regulatory requirements (i.e., 5 years after our business relationship with you has ended or longer if you have legitimate interests (such as handling a dispute with you). If you have opted out of receiving marketing communications we will hold your details on our suppression list so that we know you do not want to receive these communications.</p>

                    <p>We may keep your data for longer than 5 years if we cannot delete it for legal, regulatory or technical reasons.</p>

                    <h2 id="your-rights" className={styles['privacy-subtitle']}>Your rights regarding your personal information</h2>
                    <p>The rights that might be available to you in relation to the personal information we hold about you are set out below. You may exercise these rights by sending us an email at {companyEmail}.</p>

                    <h3 className={styles['privacy-section-title']}>Information and Access</h3>
                    <p>If you ask us, we will confirm whether we are processing your personal information and, if so, what information we process and, if requested, provide you with a copy of that personal information (along with certain other details) within thirty (30) days from the date of your request. If you require additional copies, we may need to charge a reasonable administration fee.</p>

                    <h3 className={styles['privacy-section-title']}>Rectification</h3>
                    <p>It is important to us that your personal information is up to date. We will take all reasonable steps to make sure that your personal information remains accurate, complete and up-to-date. If the personal information we hold about you is inaccurate or incomplete, you are entitled to have it rectified. If we have disclosed your personal information to others, we will let them know about the rectification where possible. If you ask us, if possible and lawful to do so, we will also inform you who we have shared your personal information with so that you can contact them directly.</p>

                    <p>You may inform us at any time that your personal details have changed by sending us an e-mail at {companyEmail}. The Company will change your personal information in accordance with your instructions. To proceed with such requests, in some cases we may need supporting documents from you as proof, i.e. personal information that we are required to keep for regulatory or legal purposes.</p>

                    <h3 className={styles['privacy-section-title']}>Erasure</h3>
                    <p>You can ask us to delete or remove your personal information in certain circumstances such as if we no longer need it or you withdraw your consent (if applicable) provided that we have no legal obligation to retain that data. Such request will be subject to any retention limits we are required to comply with in accordance with applicable laws and regulations and subject to section &#39;Storage of Your Personal Information and Retention Period&#39;. If we have disclosed your personal information to others, we will let them know about the erasure where possible. If you ask us, where possible and lawful to do so, we will also inform you who we have shared your personal information with so that you can contact them directly.</p>

                    <h3 className={styles['privacy-section-title']}>Processing restrictions</h3>
                    <p>You can ask us to &#39;block&#39; or suppress the processing of your personal data in certain circumstances such as if you contest the accuracy of that personal information or object to us processing it. It will not stop us from storing your personal information. We will inform you before we decide not to agree with any requested restriction. If we have disclosed your personal information to others, we will inform about the restriction if possible. If you ask us, if possible and lawful to do so, we will also tell you who we have shared your personal information with so that you can contact them directly.</p>

                    <h3 className={styles['privacy-section-title']}>Data Portability</h3>
                    <p>Under the General Data Protection Regulation (679/2016), you have the right, in certain circumstances, to obtain personal information you have provided us with (in a structured, commonly used and machine readable format) and to re-use it elsewhere or ask us to transfer this to a third party of your choice.</p>

                    <h3 className={styles['privacy-section-title']}>Objection</h3>
                    <p>You can ask us to stop processing your personal information, and we will do so, if we are:</p>
                    <ul>
                        <li>relying on our own or someone else&#39;s legitimate interests to process your personal information except if we can demonstrate compelling legal grounds for the processing;</li>
                        <li>processing your personal information for direct marketing; or</li>
                        <li>processing your personal information for research unless we reasonably believe such processing is necessary or prudent for the performance of a task carried out in the public interest (such as by a regulatory or enforcement agency).</li>
                    </ul>

                    <h3 className={styles['privacy-section-title']}>Automated decision-making and profiling</h3>
                    <p>If we have made a decision about you based solely on an automated process (e.g. through automatic profiling) that affects your ability to use the services or has another significant effect on you, you can request not to be subject to such a decision unless we can demonstrate to you that such decision is necessary for entering into, or the performance of, a contract between you and us. Even where a decision is necessary for entering into or performing a contract, you may contest the decision and require human intervention. We may not be able to offer our services or products with you, if we agree to such request (i.e. end our relationship with you).</p>

                    <h2 id="opt-out" className={styles['privacy-subtitle']}>Choice to opt-out collecting your personal information</h2>
                    <p>If you do not want us to use your personal information, you must inform the Company by sending an email to {companyEmail}. If you decide to do so, we may not be able to continue to provide information, services and/or products requested by you and we will have no liability to you in this respect.</p>

                    <h2 id="legal-disclaimer" className={styles['privacy-subtitle']}>Legal Disclaimer</h2>
                    <p>The Company may disclose your personally identifiable information as required by rules and regulations and when the Company believes that disclosure is necessary to protect our rights and/or to comply with any proceedings, court order, legal process served or pursuant to governmental, intergovernmental or other regulatory bodies. The Company shall not be liable for misuse or loss of personal information or otherwise on the Company&#39;s website(s) that the Company does not have access to or control over. The Company will not be liable for unlawful or unauthorised use of your personal information due to misuse or misplacement of your passwords, negligent or malicious intervention and/or otherwise by you or due to your acts or omissions or a person authorised by you (whether that authorisation is permitted by the terms of our legal relationship with you or not).</p>

                    <h2 id="changes" className={styles['privacy-subtitle']}>Changes in this Privacy Policy</h2>
                    <p>Our Privacy Policy is reviewed from time to time to take into account new laws and technologies, changes to our operations and practices, and to ensure that it remains appropriate to the changing environment.</p>

                    <p>If we decide to change our Privacy Policy, we will post those changes to this Privacy Policy and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.</p>

                    <h2 id="complaint" className={styles['privacy-subtitle']}>If you have a complaint</h2>
                    <p>If you have a concern about any aspect of our privacy practices, you can submit a complaint. This will be acted upon promptly. To make a complaint, please contact us via email at {companyEmail}.</p>

                    <h2 id="contact" className={styles['privacy-subtitle']}>How to contact us</h2>
                    <p>If you have any enquiries regarding this Privacy Policy, please e-mail us at {companyEmail}.</p>

                    <button
                        onClick={scrollToTop}
                        className={styles['privacy-scroll-btn']}
                        title="Go to top"
                        style={{ display: showScrollBtn ? 'block' : 'none' }}
                    >
                        &#8679;
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
