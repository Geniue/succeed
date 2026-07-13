<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteContentSeeder extends Seeder
{
    public function run(): void
    {
        SiteSetting::query()->updateOrCreate(
            ['id' => 1],
            [
                'brand_name' => 'Succeed',
                'legal_name' => 'Succeed Education Support Services L.L.C.',
                'legal_name_short' => 'Succeed Education Support Services LLC',
                'flagship_brand' => 'Universities.org',
                'flagship_url' => 'https://universities.org',
                'email' => 'info@succeedeu.com',
                'phone' => '+971 52 292 3333',
                'location' => 'Dubai, United Arab Emirates',
                'logo_path' => null,
                'navigation' => [
                    'items' => [
                        [
                            'label' => 'Home',
                            'url' => '/',
                        ],
                        [
                            'label' => 'About Us',
                            'url' => '/about',
                        ],
                    ],
                    'cta' => [
                        'label' => 'Get in Touch',
                        'url' => '/#contact',
                    ],
                ],
                'footer' => [
                    'description' => 'Succeed Education Support Services L.L.C. is a Dubai-based company building trusted platforms in international education, including our flagship platform, Universities.org.',
                    'company_heading' => 'Company',
                    'company_links' => [
                        [
                            'label' => 'Home',
                            'url' => '/',
                        ],
                        [
                            'label' => 'About Us',
                            'url' => '/about',
                        ],
                        [
                            'label' => 'Contact Us',
                            'url' => '/#contact',
                        ],
                        [
                            'label' => 'Universities.org',
                            'url' => 'https://universities.org',
                            'external' => true,
                        ],
                    ],
                    'contact_heading' => 'Contact',
                    'terms_label' => 'Terms & Conditions',
                    'terms_url' => '/terms-and-conditions',
                    'privacy_label' => 'Privacy Policy',
                    'privacy_url' => '/privacy-policy',
                    'copyright_text' => 'All rights reserved.',
                ],
            ],
        );

        Page::query()->updateOrCreate(
            ['slug' => 'home'],
            [
                'name' => 'Home',
                'seo_title' => 'Succeed | Succeed Education Support Services L.L.C.',
                'seo_description' => 'Succeed Education Support Services L.L.C. is a Dubai-based company building trusted platforms in international education, including Universities.org.',
                'is_published' => true,
                'content' => [
                    'hero' => [
                        'eyebrow' => 'Succeed Education Support Services LLC',
                        'title' => 'The company built to help people',
                        'highlighted_text' => 'succeed.',
                        'description' => 'We\'re a Dubai-based company building trusted platforms in international education. Our flagship platform, Universities.org, has guided thousands of students toward the right university, in the right country, for the right reasons.',
                        'primary_cta' => [
                            'label' => 'Contact Us',
                            'url' => '#contact',
                        ],
                        'secondary_cta' => [
                            'label' => 'About Succeed',
                            'url' => '/about',
                        ],
                        'image' => 'https://universities.org/images/site/home/about-main.webp',
                        'image_alt' => 'Students guided through their study-abroad journey',
                        'badge' => [
                            'value' => '85+',
                            'label' => 'Partner universities across four continents',
                        ],
                    ],

                    'statistics' => [
                        'items' => [
                            [
                                'value' => '85+',
                                'label' => 'Partner universities worldwide',
                            ],
                            [
                                'value' => '25+',
                                'label' => 'Years of combined experience',
                            ],
                            [
                                'value' => '1',
                                'label' => 'Flagship platform, Universities.org',
                            ],
                            [
                                'value' => 'Thousands',
                                'label' => 'Of students supported globally',
                            ],
                        ],
                    ],

                    'about' => [
                        'eyebrow' => 'Who we are',
                        'title' => 'A parent company with one focus: education, done honestly.',
                        'description' => 'Succeed Education Support Services L.L.C. was founded on a simple belief — that studying abroad should be simple, honest, and accessible to everyone. That belief shapes every platform we build and every partnership we form, starting with our flagship platform, Universities.org.',
                        'image' => 'https://universities.org/images/site/home/about-secondary.webp',
                        'image_alt' => 'Succeed\'s approach to student guidance',
                        'cta' => [
                            'label' => 'Learn more about us →',
                            'url' => '/about',
                        ],
                    ],

                    'flagship' => [
                        'eyebrow' => 'Our flagship platform',
                        'title' => 'Universities.org',
                        'description' => 'Universities.org connects students with 85+ partner universities across Europe, North America, Asia, and the Middle East — offering free counseling, application support, visa guidance, and accommodation assistance from first consultation to arrival.',
                        'image' => 'https://universities.org/images/site/home/why-support-mobile.webp',
                        'image_alt' => 'Universities.org student support',
                        'cta' => [
                            'label' => 'Visit Universities.org ↗',
                            'url' => 'https://universities.org',
                        ],
                    ],

                    'contact' => [
                        'eyebrow' => 'Contact us',
                        'title' => 'Have a question for our team? We\'d love to hear from you.',
                        'phone_label' => 'Phone',
                        'email_label' => 'Email',
                        'location_label' => 'Location',
                        'supporting_text' => 'Succeed Education Support Services L.L.C. operates Universities.org. For enquiries related to studying abroad, visit Universities.org directly.',
                    ],
                ],
            ],
        );

        Page::query()->updateOrCreate(
            ['slug' => 'about'],
            [
                'name' => 'About',
                'seo_title' => 'About Succeed | Succeed Education Support Services L.L.C.',
                'seo_description' => 'Learn about Succeed Education Support Services L.L.C., the Dubai-based company behind Universities.org.',
                'is_published' => true,
                'content' => [
                    'hero' => [
                        'eyebrow' => 'About us',
                        'title' => 'Succeed Education Support Services L.L.C.',
                        'description' => 'We are a Dubai-based company behind trusted platforms in international education. Our team believes studying abroad should be simple, honest, and accessible — a principle that shaped our flagship platform, Universities.org, and continues to guide everything we build.',
                        'image' => 'https://universities.org/images/site/home/hero-mobile.webp',
                        'image_alt' => 'Succeed team supporting students',
                    ],

                    'values' => [
                        'items' => [
                            [
                                'title' => 'Honesty first',
                                'description' => 'We believe good guidance is honest guidance — free of hidden costs or agendas, for every brand we build.',
                            ],
                            [
                                'title' => 'Built on partnerships',
                                'description' => 'We work directly with accredited institutions and trusted partners to keep every platform we run credible.',
                            ],
                            [
                                'title' => 'One team, many platforms',
                                'description' => 'Our flagship platform, Universities.org, reflects the same standard we hold every future platform to.',
                            ],
                        ],
                    ],

                    'flagship' => [
                        'eyebrow' => 'Our flagship platform',
                        'title' => 'Universities.org',
                        'description' => 'Universities.org is where our mission comes to life — helping students discover universities, programs, and countries with expert guidance from first consultation through to arrival. Succeed Education Support Services L.L.C. operates the platform in full.',
                        'image' => 'https://universities.org/images/site/home/program-business.webp',
                        'image_alt' => 'Universities.org programs',
                        'cta' => [
                            'label' => 'Visit Universities.org ↗',
                            'url' => 'https://universities.org',
                        ],
                    ],
                ],
            ],
        );

        Page::query()->updateOrCreate(
            ['slug' => 'terms'],
            [
                'name' => 'Terms & Conditions',
                'seo_title' => 'Terms & Conditions | Succeed',
                'seo_description' => 'Terms and conditions for the Succeed Education Support Services L.L.C. website.',
                'is_published' => true,
                'content' => [
                    'eyebrow' => 'Legal',
                    'title' => 'Terms & Conditions',
                    'last_updated' => (string) now()->year,
                    'body' => <<<'HTML'
<p>These Terms &amp; Conditions ("Terms") govern your access to and use of this website (the "Site"), operated by <strong>Succeed Education Support Services L.L.C.</strong>, a limited liability company in Dubai, United Arab Emirates ("we", "us", or "our"). By using the Site, you agree to these Terms. If you do not agree, please do not use the Site.</p>

<h2>1. Who we are</h2>
<p>This Site is provided by Succeed Education Support Services L.L.C., with its principal place of business in Dubai, UAE. We are the company behind Universities.org, our flagship platform for international education guidance. Contact details published on this Site, including email and telephone, are the appropriate channels for enquiries relating to these Terms.</p>

<h2>2. Nature of this Site</h2>
<p>This Site is a corporate information site for Succeed Education Support Services L.L.C. It does not itself provide student counseling, admissions, or visa services — those services are provided through our flagship platform, Universities.org. We do not guarantee admission to any institution, visa approval, or any particular outcome through either this Site or our affiliated platforms.</p>

<h2>3. Acceptable use</h2>
<p>You agree to use the Site only for lawful purposes. You must not:</p>
<ul>
<li>misrepresent your identity or affiliation, or submit false or misleading information;</li>
<li>attempt to gain unauthorised access to our systems or other users' data;</li>
<li>use the Site to transmit malware, spam, or unlawful or defamatory content;</li>
<li>scrape, harvest, or automate access to the Site in a way that impairs its operation.</li>
</ul>

<h2>4. Communications</h2>
<p>Where you submit forms or otherwise communicate with us through the Site, you agree that the information you provide is accurate to the best of your knowledge.</p>

<h2>5. Intellectual property</h2>
<p>The Site, its design, logos, text, graphics, and other content, excluding user-submitted content, are owned by or licensed to Succeed Education Support Services L.L.C. and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent, except as allowed by law or for personal, non-commercial viewing.</p>

<h2>6. Third-party websites and services</h2>
<p>The Site may contain links to third-party websites, including Universities.org and affiliated universities or service providers. We do not control and are not responsible for their content, privacy practices, or availability. Your use of third-party services is at your own risk and subject to their own terms.</p>

<h2>7. Disclaimers</h2>
<p>The Site and its content are provided on an "as is" and "as available" basis. To the fullest extent permitted by applicable law in the UAE, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</p>

<h2>8. Limitation of liability</h2>
<p>To the maximum extent permitted by law, Succeed Education Support Services L.L.C. and its directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site. Our aggregate liability for any claim arising out of these Terms shall not exceed AED 500, where no fees were paid to us directly. Some jurisdictions do not allow certain limitations; in such cases our liability is limited to the fullest extent permitted.</p>

<h2>9. Indemnity</h2>
<p>You agree to indemnify and hold harmless Succeed Education Support Services L.L.C. from any claims, damages, losses, or expenses, including reasonable legal fees, arising from your breach of these Terms or your misuse of the Site.</p>

<h2>10. Governing law and disputes</h2>
<p>These Terms are governed by the laws of the United Arab Emirates, as applied in the Emirate of Dubai. Subject to mandatory consumer protections, you agree that the courts of Dubai, UAE, shall have exclusive jurisdiction over any dispute arising from these Terms.</p>

<h2>11. Changes</h2>
<p>We may update these Terms from time to time. The "Last updated" date above will be revised accordingly. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>

<h2>12. Contact</h2>
<p>For questions about these Terms, please contact us using the email address or telephone number published on this Site.</p>
HTML,
                ],
            ],
        );

        Page::query()->updateOrCreate(
            ['slug' => 'privacy'],
            [
                'name' => 'Privacy Policy',
                'seo_title' => 'Privacy Policy | Succeed',
                'seo_description' => 'Privacy policy for the Succeed Education Support Services L.L.C. website.',
                'is_published' => true,
                'content' => [
                    'eyebrow' => 'Legal',
                    'title' => 'Privacy Policy',
                    'last_updated' => (string) now()->year,
                    'body' => <<<'HTML'
<p><strong>Succeed Education Support Services L.L.C.</strong> ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit this website (the "Services"). It applies to individuals in line with applicable laws.</p>

<h2>1. Data controller</h2>
<p>The data controller responsible for personal data processed in connection with the Services is Succeed Education Support Services L.L.C., Dubai, United Arab Emirates. You may contact us using the details published on this Site.</p>

<h2>2. Information we may collect</h2>
<ul>
<li><strong>Identity and contact data:</strong> name, email address, telephone number, and similar details you provide via our contact form.</li>
<li><strong>Enquiry data:</strong> the content of messages you send us through the Site.</li>
<li><strong>Technical and usage data:</strong> IP address, browser type, device information, pages viewed, and timestamps.</li>
</ul>
<p>We do not intentionally collect special categories of personal data unless you voluntarily provide such information and we have a lawful basis to process it.</p>

<h2>3. How we use your information</h2>
<ul>
<li>to respond to enquiries submitted through this Site;</li>
<li>to operate, maintain, and improve the Site;</li>
<li>to comply with legal obligations and protect our rights and security;</li>
<li>to analyse aggregated usage trends.</li>
</ul>

<h2>4. Legal bases (where applicable)</h2>
<p>Where required by law, we rely on one or more of: your consent; performance of a contract or steps at your request; our legitimate interests; or compliance with legal obligations.</p>

<h2>5. Sharing and international transfers</h2>
<p>We may share information with service providers who assist us, for example hosting, email, and analytics, under appropriate confidentiality and data-processing terms. Some providers may be located outside the UAE; where we transfer personal data internationally, we implement safeguards consistent with applicable law.</p>

<h2>6. Retention</h2>
<p>We retain personal data only as long as necessary for the purposes described, unless a longer period is required for legal, regulatory, or legitimate business reasons.</p>

<h2>7. Security</h2>
<p>We implement appropriate technical and organisational measures designed to protect personal data against unauthorised access, alteration, disclosure, or destruction. No method of transmission over the Internet is completely secure.</p>

<h2>8. Your rights</h2>
<p>Subject to applicable law, you may have the right to access, rectify, erase, restrict processing of, or object to certain processing of your personal data, and to withdraw consent where processing is consent-based. To exercise your rights, contact us using the details on this Site.</p>

<h2>9. Children</h2>
<p>Our Services are not directed at children under the age of 13, or the minimum age required locally. We do not knowingly collect personal data from children without appropriate parental consent where required.</p>

<h2>10. Changes to this policy</h2>
<p>We may update this Privacy Policy periodically. The "Last updated" date above will change accordingly.</p>

<h2>11. Contact</h2>
<p>For privacy-related requests, please contact us using the email address or telephone number published on this Site.</p>
HTML,
                ],
            ],
        );
    }
}