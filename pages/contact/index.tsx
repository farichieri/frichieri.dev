import Image from "next/image";
import Link from "next/link";

import { Form } from "@/components";

export default function Contact() {
  return (
    <>
      <h1 style={{ width: "100%", textAlign: "left" }}>Contact</h1>
      <div className="contact-container">
        <div className="form-container">
          <Form />
        </div>

        <div className="links">
          <Link href={"https://www.linkedin.com/in/frichieri/"} target="_blank">
            <span>
              <Image
                src={"/images/linkedin.png"}
                alt="linkedin"
                width={38}
                height={38}
              />
            </span>
          </Link>
          <Link href={"https://github.com/FARichieri"} target="_blank">
            <span className="github">
              <Image
                src={"/images/github.png"}
                alt="github"
                width={32}
                height={32}
              />
            </span>
          </Link>
          <Link href="https://twitter.com/farichieri">
            <span className="twitter">
              <Image
                src="/images/twitter.png"
                alt="twitter"
                width={38}
                height={38}
              />
            </span>
          </Link>
          <Link href="mailto:fabriciorichieri@yahoo.com">
            <span className="email">
              <Image
                src="/images/email.png"
                alt="email"
                width={32}
                height={32}
              />
            </span>
          </Link>
        </div>

        <style jsx>{`
          .contact-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            width: 100%;
          }
          .form-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid var(--box-shadow-light);
            border-top: 1px solid var(--box-shadow-light);
            max-width: 500px;
            padding-top: 2.5rem;
          }
          .links {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-top: 2rem;
          }
          span {
            position: relative;
            display: flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
          }
          span img {
            border: none;
            outline: none;
          }
          .github {
            background: white;
          }
          .email {
            margin-left: 0.15rem;
          }
          span:hover {
            filter: brightness(1.5);
          }
        `}</style>
      </div>
    </>
  );
}
