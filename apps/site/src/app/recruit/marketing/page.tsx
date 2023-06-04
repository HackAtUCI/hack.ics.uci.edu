import marketingLogo from "./marketing-logo.svg";

const Marketing = () => {
  return (
    <>
      <img src={marketingLogo.src} alt="Marketing logo" />
      <h3>Marketing</h3>
      <div style={{ marginBottom: "3rem" }}>
        <p>
          <strong>General Marketing Organizer:</strong> As a general marketing
          organizer, your responsibilities vary from sending emails via to
          making posts on social media platforms in a witty and creative manner.
          You are required to meet strict deadlines and have exceptional
          communication skills since marketing is all about reaching out to the
          public.
        </p>
        <p>
          <strong>Key Qualifications</strong>
        </p>
        <ul>
          <li>Exceptional communication and writing skills</li>
          <li>
            Experience with email and social media marketing campaigns
            (Instagram, Facebook, Discord, MailChimp)
          </li>
          <li>Creative and critical thinking abilities</li>
          <li>Drive to work in a fast-paced cross-functional team</li>
          <li>Photography and videography skills (preferred)</li>
        </ul>
      </div>
      <div style={{ marginBottom: "3rem" }}>
        <p>
          <strong>Graphic Designer:</strong> As a graphic designer, you will be
          responsible for creating graphics that represent our organization and
          events for various platforms, such as Facebook or Instagram. Designers
          also shape the theme and aesthetic for ZotHacks and HackUCI. Each
          design will follow general guidelines and have to be submitted for
          review before given deadlines. You must be detail-oriented and have
          proficient knowledge in visual design, color theory, and typography.
          You will also be working closely with the web development team, so
          experience with HTML and CSS is a plus, but not required.
        </p>
        <p>
          <strong>Key Qualifications</strong>
        </p>
        <ul>
          <li>Proficiency in graphic design</li>
          <li>
            Experience using a raster graphics editor (ex. Adobe Photoshop, Fire
            Alpaca, etc.)
          </li>
          <li>Creative and critical thinking abilities</li>
          <li>
            Experience using a vector graphics editor (ex. Adobe Illustrator,
            Inkscape, etc.)
          </li>
          <li>
            Willing to dedicate ~4 hours per week to Hack (meeting, content
            creation, etc.)
          </li>
        </ul>
      </div>
    </>
  );
};

export default Marketing;
