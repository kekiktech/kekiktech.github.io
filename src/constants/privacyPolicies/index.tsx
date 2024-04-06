import { ReactElement } from "react";

const privacyPolicies: { [key: string]: ReactElement } = {
  mundo: (
    <span>
      {
        <p>
          This privacy notice for Kekik Tech('<b>we</b>', '<b>us</b>' or '
          <b>our</b>'), describes how and why we might collect, store, use,
          and/or share your information when you use our services('
          <b>Services</b>'), such as when you:
          <ul>
            <li>
              &bull; Download and use our mobile application Mundo: Track
              Visited Countries('<b>App</b>', or '<b>Mundo</b>'), or any other
              application of ours that links to this privacy notice
            </li>
            <li>
              &bull; Engage with us in other related ways, including any sales,
              marketing, or events.
            </li>
          </ul>
        </p>
      }
      <h6>What information do we collect?</h6>
      We do not collect any personal information from you through the App. This
      means we don't collect data like your name, email address, phone number,
      or any unique identifiers associated with you or your device.
      <h6>Third-party services</h6>
      Mundo uses a third party service called{" "}
      <a href="https://flagcdn.com/" target="#">
        FlagCDN
      </a>{" "}
      to retrieve the images of the country flags. Please see the privacy and
      cookie policies of Flagpedia to learn more:
      <ul>
        <li>
          &bull;{" "}
          <a href="https://flagpedia.net/privacy-policy" target="#">
            Privacy Policy of Flagpedia
          </a>
        </li>
        <li>
          &bull;{" "}
          <a href="https://flagpedia.net/cookie-policy" target="#">
            Cookie Policy of Flagpedia
          </a>
        </li>
      </ul>
      <h6>Security</h6>
      We have implemented appropriate and reasonable technical security measures
      designed to protect the security of any personal information we process.
      However, no electronic transmission over the Internet or information
      storage technology can be guaranteed to be 100% secure. Therefore, we
      cannot warrant the security of any information you transmit to us through
      the App. Although we will do our best to protect your personal
      information, transmission of personal information to and from our Services
      is at your own risk.
      <h6>Children's Privacy</h6>
      Mundo do not address anyone under the age of 13. We do not knowingly
      collect personally identifiable information from children under 13 years
      of age.
      <h6>Changes to this Privacy Policy</h6>
      We may update this privacy notice from time to time. The updated version
      will be indicated by an updated 'Revised' date and the updated version
      will be effective as soon as it is accessible. If we make material changes
      to this privacy notice, we may notify you either by prominently posting a
      notice of such changes or by directly sending you a notification. We
      encourage you to review this privacy notice frequently to be informed of
      how we are protecting your information.{" "}
      <b>This policy is effective as of 6 April 2024</b>.<h6>Contact us</h6>
      Reading this privacy notice will help you understand your privacy rights
      and choices. If you do not agree with our policies and practices, please
      do not use our Services. If you still have any questions or concerns,
      please contact us at kekiktech@gmail.com.
    </span>
  ),
};

export default privacyPolicies;
