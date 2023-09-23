import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import { Inter } from "next/font/google";
import { jsPDF } from "jspdf";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const doc = new jsPDF({
    orientation: "potrait",
    unit: "in",
    format: [10, 18],
  });

  const [state, setState] = useState({
    name: "",
    address: "",
    offerDate: "",
    joiningDate: "",
    salary: "",
    nonPaymentDate: "",
    nonPaymentMonth: "",
    additionalSalary: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const {
    name,
    address,
    offerDate,
    joiningDate,
    salary,
    nonPaymentDate,
    nonPaymentMonth,
    additionalSalary,
  } = state;

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          SueGPT
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Link href="/legal">
            <p>Document Generation </p>
          </Link>
          <Link href="/chat">
            <p>Legal Advice</p>
          </Link>
          <Link href="/">
            <p>Who we are</p>
          </Link>
          <p>Login</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        <label>
          Name:
          <input
            onChange={onChange}
            name="name"
            value={name}
            placeholder="Enter your names"
          />
        </label>
        <label>
          Address:
          <input
            onChange={onChange}
            name="address"
            value={address}
            placeholder="Enter your address"
          />
        </label>
        <label>
          Date of offer letter:
          <input
            onChange={onChange}
            name="offerDate"
            value={offerDate}
            placeholder="Enter date of your offer letter"
          />
        </label>
        <label>
          <p>Date of joining:</p>
          <input
            onChange={onChange}
            name="joiningDate"
            value={joiningDate}
            placeholder="Enter date of your joining"
          />
        </label>
        <label>
          Salary:
          <input
            onChange={onChange}
            name="salary"
            value={salary}
            placeholder="Enter your salary"
          />
        </label>
        <label>
          Date of non-payment of salary:
          <input
            onChange={onChange}
            name="nonPaymentDate"
            value={nonPaymentDate}
            placeholder="Enter date of non-payment of salary"
          />
        </label>
        <label>
          Month of non-payment of salary:
          <input
            onChange={onChange}
            name="nonPaymentMonth"
            value={nonPaymentMonth}
            placeholder="Enter month of non-payment of salary"
          />
        </label>
        <label>
          Additional salary {"(if any)"}:
          <input
            onChange={onChange}
            name="additionalSalary"
            value={additionalSalary}
            placeholder="Enter additional salary if any"
          />
        </label>
        <br />
        <button
          className={styles.button}
          onClick={() => {
            doc.text(
              `
Ref. No…………….                                  Dated 29th Sept, 2023

REGD.A.D.
SUB.: LEGAL NOTICE

To,
XYZ. Company Private Limited

Through its Managing Director

Mr. ABC

Sir/Madam,

Pursuant to the instructions from and on behalf of my client ${name}, 
resident of ${address} I do hereby serve you with the following Legal
Notice: 

1. That my client ${name} was appointed by your offer letter dated ${offerDate}
and the  salary of my client ${name} was fixed at Rs.${salary} per month.

2. That the offer letter dated ${offerDate}, stated the joining date as ${joiningDate}
which my client ${name} duly followed.

3. That my client did her duty diligently, regularly and with utmost punctuality 
and sincerity, and with full devotion in accordance with the well-settled 
provisions of the law. You issued the offer letter in the name of my client and
got printed the visiting cards also in the name of my client along with the
Identity Card.

4. That on ${nonPaymentDate}, when my client went to attend her duty; then your office 
abruptly refused to allow to my client to attend her duty and told that services
of my client are no more required by your office and thus the services of my
client have been terminated by you in a most illegal and unlawful manner without
any reasonable rhyme and cause. At the time of termination of the services of my
client, you did not pay the salary for the month of ${nonPaymentMonth} salary for
the month of ${nonPaymentMonth} which comes to Rs. ${salary}/- to my said client.

5. That my client visited your office from 9 a.m. to 4 p.m. from time to time 
and spent a huge amount of Rs. ${salary}/- on the charges of travelling but you refused
to pay and also the amount of Rs. ${salary}- my client spent while doing fieldwork
for your company. Lastly ${nonPaymentMonth} Month, year you clearly refused to pay the salary
amount of Rs. ${salary}/- to my client along with travelling charges and amount spend
on fieldwork.

6. That you did not provide me statutory benefits i.e. Providential Fund. etc. 
You also did not pay the of bonus and other service benefits which totally comes
to Rs. ${Number(salary) + Number(additionalSalary)}/-

I, therefore, call upon you through this Notice, to make the payment of the 
Rs. ${
                Number(salary) + Number(additionalSalary)
              }/- to my client along with interest up to date, under intimation to me,
within the period of 15 days, failing which my client has given clear instructions
to me to file criminal as well as the civil suit and Suit for Recovery in the
competent court of law and in that event you will be fully responsible for all
costs, risks, responsibilities, expenses and consequences thereof. Please note well.

A copy of this Notice is kept in my office for record and further necessary action and
you are also advised to keep the copy safe as you would be asked to produce it in court.
          `,
              1,
              1
            );
            doc.save("salary_notice.pdf");
          }}
        >
          Generate Doccument
        </button>
      </div>
      <div></div>
      <div></div>
    </main>
  );
}
