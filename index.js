/*
timeline data coming from https://www.nelsonmandela.org/content/page/timeline
rows = document.querySelector("#chronology").rows
data = []
for (let i = 1; i < rows.length; i++) {
  console.log(i)
  try {
    data.push({
      year: rows[i].cells[0].textContent.trim(),
      date: rows[i].cells[1].textContent.trim(),
      event: rows[i].cells[2].textContent.trim()
    })
  } catch (e) { }
} */

timeline = [
    {
        "year": "1918",
        "date": "July 18",
        "event": "Born Rolihlahla Mandela at Mvezo in the Transkei"
    },
    {
        "year": "1925",
        "date": "",
        "event": "Attends primary school near Qunu (receives the name ‘Nelson’ from a teacher)"
    },
    {
        "year": "1930",
        "date": "",
        "event": "Father dies. Entrusted to Thembu Regent Jongintaba Dalindyebo at the age of 12\n\t\t\t\t\n\t\t\t\t\tWhile his autobiography Long Walk to Freedom places Mandela's father’s death in 1927, historical evidence shows it must have been later, most likely 1930. In fact, the original Long Walk to Freedom manuscript (written on Robben Island) states the year as 1930."
    },
    {
        "year": "1934",
        "date": "",
        "event": "Undergoes initiation; Attends Clarkebury Boarding Institute in Engcobo"
    },
    {
        "year": "1937",
        "date": "",
        "event": "Attends Healdtown, the Wesleyan College at Fort Beaufort"
    },
    {
        "year": "1939",
        "date": "",
        "event": "Enrols at the University College of Fort Hare, in Alice"
    },
    {
        "year": "1940",
        "date": "",
        "event": "Expelled"
    },
    {
        "year": "1941",
        "date": "",
        "event": "Escapes an arranged marriage; becomes a mine security officer; starts articles at the law firm Witkin, Sidelsky & Eidelman"
    },
    {
        "year": "1942",
        "date": "",
        "event": "Completes BA through the University of South Africa (UNISA)"
    },
    {
        "year": "1942",
        "date": "",
        "event": "Begins to attend African National Congress (ANC) meetings informally"
    },
    {
        "year": "1943",
        "date": "",
        "event": "Graduates with BA from Fort Hare; Enrols for an LLB at Wits University"
    },
    {
        "year": "1944",
        "date": "",
        "event": "Co-founds the ANC Youth League (ANCYL); marries Evelyn Ntoko Mase – they have four children: Thembekile (1945); Makaziwe (1947 – who dies after nine months); Makgatho (1950); Makaziwe (1954)"
    },
    {
        "year": "1948",
        "date": "",
        "event": "Elected national secretary of the ANCYL"
    },
    {
        "year": "1951",
        "date": "",
        "event": "Elected President of the ANCYL"
    },
    {
        "year": "1952",
        "date": "",
        "event": "Defiance Campaign begins; Arrested and charged for violating the Suppression of Communism Act; Elected Transvaal ANC President; Convicted with J.S Moroka, Walter Sisulu and 17 others under the Suppression of Communism Act; Sentenced to nine months imprisonment with hard labour, suspended for two years; Elected first of ANC deputy presidents; Opens law firm with Oliver Tambo - the only black law firm in Johannesburg in the 1950s"
    },
    {
        "year": "1953",
        "date": "",
        "event": "Devises the M-Plan for the ANC’s future underground operations"
    },
    {
        "year": "1955",
        "date": "26 June",
        "event": "Watches as the Congress of the People at Kliptown adopts the Freedom Charter"
    },
    {
        "year": "1956",
        "date": "5 December",
        "event": "Arrested and later joins 155 others on trial for teason. All are acquitted by 29 March 1961"
    },
    {
        "year": "1958",
        "date": "",
        "event": "Divorces Evelyn Mase; Marries Nomzamo Winnie Madikizela – they have two daughters: Zenani (1959) and Zindzi (1960)"
    },
    {
        "year": "1960",
        "date": "21 March",
        "event": "Sharpeville Massacre"
    },
    {
        "year": "",
        "date": "30 March",
        "event": "A State of Emergency is imposed and he is among thousands detained"
    },
    {
        "year": "",
        "date": "8 April",
        "event": "The ANC is banned"
    },
    {
        "year": "1961",
        "date": "",
        "event": "Goes underground; Umkhonto weSizwe (MK) is formed"
    },
    {
        "year": "1962",
        "date": "11 January",
        "event": "Leaves the country for military training and to garner support for the ANC"
    },
    {
        "year": "",
        "date": "23 July",
        "event": "Returns to South Africa"
    },
    {
        "year": "",
        "date": "5 August",
        "event": "Arrested near Howick in KwaZulu-Natal"
    },
    {
        "year": "",
        "date": "7 November",
        "event": "Sentenced to five years in prison for incitement and leaving the country without a passport"
    },
    {
        "year": "1963",
        "date": "27 May",
        "event": "Sent to Robben Island"
    },
    {
        "year": "",
        "date": "12 June",
        "event": "Returned to Pretoria Local Prison"
    },
    {
        "year": "",
        "date": "9 October",
        "event": "Appears in court for the first time in what becomes known as the Rivonia Trial, with Walter Sisulu, Denis Goldberg, Govan Mbeki, Ahmed Kathrada, Lionel 'Rusty' Bernstein, Raymond Mhlaba, James Kantor, Elias Motsoaledi and Andrew Mlangeni"
    },
    {
        "year": "",
        "date": "3 December",
        "event": "Pleads not guilty to sabotage in the Rivonia Trial"
    },
    {
        "year": "1964",
        "date": "4 June",
        "event": "James Kantor discharged and released"
    },
    {
        "year": "",
        "date": "12 June",
        "event": "All except Rusty Bernstein are convicted and sentenced to life"
    },
    {
        "year": "",
        "date": "13 June",
        "event": "Arrives on Robben Island"
    },
    {
        "year": "1969",
        "date": "13 July",
        "event": "Thembekile is killed in a car accident"
    },
    {
        "year": "1982",
        "date": "31 March",
        "event": "Mandela, Sisulu, Raymond Mhlaba and Andrew Mlangeni and later Ahmed Kathrada are sent to Pollsmoor Prison"
    },
    {
        "year": "1985",
        "date": "10 February",
        "event": "Rejects, through his daughter, Zindzi, South African President PW Botha's offer to release him if he renounces violence"
    },
    {
        "year": "1985",
        "date": "3 November",
        "event": "Admitted to the Volks Hospital for prostate surgery"
    },
    {
        "year": "",
        "date": "23 November",
        "event": "Discharged from Volks Hospital and returned to Pollsmoor Prison"
    },
    {
        "year": "1988",
        "date": "12 August",
        "event": "Admitted to Tygerberg Hospital where he is diagnosed with tuberculosis"
    },
    {
        "year": "",
        "date": "31 August",
        "event": "Admitted to Constantiaberg MediClinic"
    },
    {
        "year": "",
        "date": "7 December",
        "event": "Moved to Victor Verster Prison in Paarl where he is held for 14 months in a cottage"
    },
    {
        "year": "1990",
        "date": "2 February",
        "event": "ANC is unbanned"
    },
    {
        "year": "",
        "date": "11 February",
        "event": "Released"
    },
    {
        "year": "",
        "date": "2 March",
        "event": "Elected ANC Deputy President"
    },
    {
        "year": "1993",
        "date": "10 December",
        "event": "Awarded the Nobel Peace Prize with President FW de Klerk"
    },
    {
        "year": "1994",
        "date": "27 April",
        "event": "Votes for the first time in his life"
    },
    {
        "year": "",
        "date": "9 May",
        "event": "Elected by Parliament as first president of a democratic South Africa"
    },
    {
        "year": "",
        "date": "10 May",
        "event": "Inaugurated as President of the Republic of South Africa"
    },
    {
        "year": "",
        "date": "14 December",
        "event": "Launches his autobiography Long Walk to Freedom"
    },
    {
        "year": "1995",
        "date": "",
        "event": "Establishes the Nelson Mandela Children's Fund"
    },
    {
        "year": "1996",
        "date": "",
        "event": "Divorces Winnie Mandela"
    },
    {
        "year": "1998",
        "date": "18 July",
        "event": "Marries Graça Machel on his 80th birthday"
    },
    {
        "year": "1999",
        "date": "",
        "event": "Steps down after one term as President, establishes the Nelson Mandela Foundation"
    },
    {
        "year": "2001",
        "date": "",
        "event": "Diagnosed with prostate cancer"
    },
    {
        "year": "2003",
        "date": "",
        "event": "Establishes the Mandela Rhodes Foundation"
    },
    {
        "year": "2004",
        "date": "1 June",
        "event": "Announces that he will be stepping down from public life"
    },
    {
        "year": "2005",
        "date": "6 January",
        "event": "Announces that his eldest son Makgatho had died of AIDS"
    },
    {
        "year": "2007",
        "date": "13 April",
        "event": "Attends the installation of his grandson Mandla as chief of the Mvezo Traditional Council"
    },
    {
        "year": "2008",
        "date": "27 June",
        "event": "Asks future generations to continue the fight for social justice"
    },
    {
        "year": "",
        "date": "18 July",
        "event": "Turns 90 years old"
    },
    {
        "year": "2009",
        "date": "",
        "event": "Votes for the fourth time in his life; Attends the inauguration of President Jacob Zuma on 9 May and witnesses Zuma's first State of the Nation address; Turns 91"
    },
    {
        "year": "2010",
        "date": "",
        "event": "Formally presented with the Fifa World Cup trophy before it embarks on a tour of South Africa"
    },
    {
        "year": "",
        "date": "11 June",
        "event": "His great-granddaughter Zenani is killed in a car accident"
    },
    {
        "year": "",
        "date": "17 June",
        "event": "Attends the funeral of his great-granddaughter Zenani"
    },
    {
        "year": "",
        "date": "11 July",
        "event": "Makes a surprise appearance at the final of the Fifa World Cup in Soweto"
    },
    {
        "year": "",
        "date": "18 July",
        "event": "Celebrates his 92nd birthday at home in Johannesburg with family and friends"
    },
    {
        "year": "",
        "date": "12 October",
        "event": "His second book Conversations with Myself  is published"
    },
    {
        "year": "",
        "date": "18 November",
        "event": "Meets the South African and American football teams that played in the Nelson Mandela Challenge match"
    },
    {
        "year": "2011",
        "date": "January",
        "event": "Admitted to hospital in Johannesburg. Discharged after two nights"
    },
    {
        "year": "",
        "date": "16 May",
        "event": "Votes in the local government elections"
    },
    {
        "year": "",
        "date": "27 June",
        "event": "His book Nelson Mandela By Himself: The Authorised Book of Quotations is launched"
    },
    {
        "year": "",
        "date": "21 June",
        "event": "Visited at home by American First Lady Michelle Obama and her daughters Sasha and Malia"
    },
    {
        "year": "",
        "date": "18 July",
        "event": "Celebrates his 93rd birthday with his family in Qunu, Eastern Cape"
    },
    {
        "year": "",
        "date": "21 October",
        "event": "Officially counted in South Africa’s Census 2011"
    },
    {
        "year": "",
        "date": "25 December",
        "event": "Spends Christmas with family in Qunu, Transkei"
    },
    {
        "year": "2012",
        "date": "25 February",
        "event": "Admitted to hospital"
    },
    {
        "year": "",
        "date": "26 February",
        "event": "Discharged from hospital"
    },
    {
        "year": "",
        "date": "18 July",
        "event": "Celebrates his 94th birthday with his family in Qunu, Transkei"
    },
    {
        "year": "",
        "date": "8 December",
        "event": "Admitted to hospital"
    },
    {
        "year": "",
        "date": "26 December",
        "event": "Discharged from hospital"
    },
    {
        "year": "2013",
        "date": "1 January",
        "event": "Spends New Year’s Day with members of his family in Johannesburg"
    },
    {
        "year": "",
        "date": "9 March",
        "event": "Admitted to hospital"
    },
    {
        "year": "",
        "date": "10 March 10",
        "event": "Discharged from hospital"
    },
    {
        "year": "",
        "date": "27 March",
        "event": "Admitted to hospital"
    },
    {
        "year": "",
        "date": "6 April",
        "event": "Discharged from hospital"
    },
    {
        "year": "",
        "date": "8 June",
        "event": "Admitted to hospital"
    },
    {
        "year": "",
        "date": "18 July",
        "event": "Spends his 95th birthday in hospital"
    },
    {
        "year": "",
        "date": "1 September",
        "event": "Discharged from hospital"
    },
    {
        "year": "",
        "date": "5 December",
        "event": "Passes away at home in Johannesburg"
    }
];

// get the tribute timeline ul element
list = document.getElementsByTagName("ul")[0];
for (let i = 0; i < timeline.length; i++) {
    list.innerHTML += `
        <li>
          <time datetime="${timeline[i].year}">${timeline[i].year} ${timeline[i].date}</time>
          ${timeline[i].event}
        </li>
        `;
}