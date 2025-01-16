import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// Google Fonts setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated SEO metadata
const logoUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/logo.png`;
const faviconUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/favicon.ico`;

export const metadata: Metadata = {
  title:
    "Celebrate Sanskriti Festival: A Cultural Journey at Radha Krishna Temple",
  description:
    "Join us for the Sanskriti Festival, a celebration of Indian culture, tradition, and devotion. Experience music, dance, and spiritual programs that bring the essence of India to life.",
  openGraph: {
    title: "Sanskriti Festival Celebration | Radha Krishna Temple",
    description:
      "Celebrate the Sanskriti Festival at Radha Krishna Temple! Experience a vibrant celebration of Indian culture with traditional music, dance performances, and spiritual programs. Join us on Dec 15th for an unforgettable experience.",
    type: "website",
    url: "https://radhakrishnatemple.net/sanskriti",
    images: [
      {
        url: "https://radhakrishnatemple.net/sanskriti/images/sanskriti.png",
        width: 1200,
        height: 630,
        alt: "Sanskriti Festival Celebration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanskriti Festival Celebration | Radha Krishna Temple",
    description:
      "Join us for the Sanskriti Festival at Radha Krishna Temple on Dec 15th. Experience cultural programs, music, and dance that celebrate the essence of Indian tradition.",
    images: ["https://radhakrishnatemple.net/sanskriti/images/sanskriti.png"],
  },
  icons: {
    icon: faviconUrl,
    apple: logoUrl,
    shortcut: logoUrl,
  },
  keywords: [
    "Sanskriti Festival",
    "Indian culture",
    "Cultural celebration",
    "Radha Krishna Temple",
    "Music and dance",
    "Sanskriti 2024",
    "Traditional dance",
    "Spiritual programs",
    "Indian traditions",
    "Festival of India",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Sanskriti 2025 is here! An exciting platform by RK Temple's Bal-Mukund & Youth Club for kids and youth to shine. Win trophies, medals, and certificates!"
        />
        <title>
          Join Sanskriti Programs at Radhakrishna Temple: Celebrate Culture and
          Spirituality
        </title>

        {/* Structured Data (JSON-LD for FAQPage) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What is Sanskriti?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sanskriti is a cultural extravaganza by JK-Yog’s Bal Mukund and Youth Club. This is a great platform for youth of different age groups to showcase their talent."
              }
            },{
              "@type": "Question",
              "name": "When and how will Sanskriti RKT 2025 be conducted?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sanskriti 2024 will be conducted in person, from January 24th, 2025 to January 26th, 2025 at the Radha Krishna Temple of Dallas, Allen, TX. The award ceremony is on 2nd Feb, 2025 (evening). The final Schedule will be posted on Third week of January, 2025"
              }
            },{
              "@type": "Question",
              "name": "Where could we get access to the lists of contests?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To get access to the list of contests, kindly visit List of Contest."
              }
            },{
              "@type": "Question",
              "name": "What are the highlights of Sanskriti?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Special trophies & medals for winners in each category. Certificates will be given for participation. Kids can participate in more than one contest. Food is available for purchase at Yugal Kunj for all three days. All proceeds support the charitable activities of JKYog & Radha Krishna Temple."
              }
            },{
              "@type": "Question",
              "name": "Where could we get access to the rules of the contests?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To get the access to the rules of the contests, kindly visit Sanskriti-Rules."
              }
            },{
              "@type": "Question",
              "name": "Where could we check for the registration fee for the different age groups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Onstage Solo Contest – $20 per participant per contest All other contests – $15 per participant per contest Entry Fee: $5 for each accompanying guests (children above 5 yrs, youth and adults) for Onstage contest Group Contest (Dance & Singing Contest) - $15 per participant in the Group"
              }
            },{
              "@type": "Question",
              "name": "What are the contact details that would help in getting further details about Sanskriti?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Email to SanskritiRKT@jkyog.org Text 972-415-9296"
              }
            },{
              "@type": "Question",
              "name": "Where could we go through the terms and the conditions of the different contests of Sanskriti?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Terms and Conditions: I am over the age of 18 and I hereby certify the following consent as parent and/or guardian. My children/wards are physically fit and have received medical clearance to participate in Sanskriti."
              }
            },{
              "@type": "Question",
              "name": "How can I help / volunteer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fill out the volunteer form: Volunteer Opportunity."
              }
            }]
          }
          `}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </body>
    </html>
  );
}
