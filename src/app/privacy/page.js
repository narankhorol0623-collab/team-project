export default function Privacy() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Privacy Policy</h1>
 
      <p>This Chrome extension does not collect, store, or share any personal user data.</p>
 
      <p>
        The extension only processes text locally in the user's browser to provide
        text correction and conversion features. No data is sent to external servers.
      </p>
 
      <h2>Permissions</h2>
      <ul>
        <li>activeTab – access current tab for text processing</li>
        <li>scripting – modify text on web pages</li>
        <li>storage – save user preferences locally</li>
      </ul>
 
      <h2>We do not:</h2>
      <ul>
        <li>Collect personal information</li>
        <li>Track browsing history</li>
        <li>Share data with third parties</li>
      </ul>
 
      <p>Contact: tmka5301@gmail.com</p>
    </div>
  );
}
 