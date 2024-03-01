const userMessage = [
    
    ["hi", "hey", "hello", "good morning", "good afternoon", "good evening", "howdy", "greetings", "hello there", "hey there", "hi there", "hello!", "hi!", "hey!"],

    ["what is cpgram","what is CPGRAM"],

    [
      "contact details of the department of administrative reforms and public grievances",
      
      "contact details of the Department of Administrative Reforms and Public Grievances?"
    ],

    [
      "where can the grievance be sent",
      "where can the grievance be sent?",
      "Where Can The Grievance Be Sent?",
      "Where Can The Grievance Be Sent"

    ],

    [
      "how do i lodge the grievance","how do i lodge the grievance?","How do i lodge the grievance","How Do I Lodge The Grievance"
      
    ],

    

    [
      "what happens when i lodge the grievance?","what happens when i lodge the grievance","What Happens When I Lodge The Grievance?","What Happens When I Lodge The Grievance"
      
    ],

    [
      "",
      "what happens to the grievances how are the grievances dealt with in central ministries or department"
    ],

    

    
  ];
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Greetings!"],
    ["CPGRAMS is an online web-enabled system for speedy redressal of grievances related pension by various Central Government Ministries  Departments Organizations This system besides providing a faster access to the pensioners offers the following online facilities"],

    [
      "Department of Administrative Reforms and Public Grievances, 5th floor, Sardar Patel Bhavan, Sansad Marg, New Delhi – 110001 Website:: www.darpg.gov.in Tele fax : 23741006",
      
      "Department of Administrative Reforms and Public Grievances, 5th floor, Sardar Patel Bhavan, Sansad Marg, New Delhi – 110001 Website:: www.darpg.gov.in Tele fax : 23741006" 
    ],

    [
      "The grievances can be sent to :The Department of Administrative Reforms and Public Grievances. (pgportal.gov.in) The Department of Pensions and Pensioners Welfare.(DP&PW) (pgportal.gov.in/pension/)The above nodal agencies receive grievances online through pgportal.gov.in as well as by post or by hand in person, from the public.",

      "The grievances can be sent to :The Department of Administrative Reforms and Public Grievances. (pgportal.gov.in) The Department of Pensions and Pensioners Welfare.(DP&PW) (pgportal.gov.in/pension/)The above nodal agencies receive grievances online through pgportal.gov.in as well as by post or by hand in person, from the public.",

      "The grievances can be sent to :The Department of Administrative Reforms and Public Grievances. (pgportal.gov.in) The Department of Pensions and Pensioners Welfare.(DP&PW) (pgportal.gov.in/pension/)The above nodal agencies receive grievances online through pgportal.gov.in as well as by post or by hand in person, from the public.",

      "The grievances can be sent to :The Department of Administrative Reforms and Public Grievances. (pgportal.gov.in) The Department of Pensions and Pensioners Welfare.(DP&PW) (pgportal.gov.in/pension/)The above nodal agencies receive grievances online through pgportal.gov.in as well as by post or by hand in person, from the public."  
    ],

    [
      "The grievances can be lodged online on . In cases where internet facility is not available or even otherwise, the citizen is free to send her/his grievance by Post. There is no prescribed format.The grievance may be written on any plain sheet of paper or on a Postcard / Inland letter and addressed to the Department. The grievance can also be filled through Common Service Centre."


    ],
    [
      "The grievance is acknowledged online or by post A unique registration number is given to each grievance."
    ],

    ["Every Central Ministry / Department has designated a Joint Secretary or a Director / Deputy Secretary, as its ‘Director of Grievances’. He / She is the nodal officer for redress of grievances on work areas allocated to that particular Ministry / Department."]

    
  ];
  
  
  const synth = window.speechSynthesis;
  
  
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
       

        
        //inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }