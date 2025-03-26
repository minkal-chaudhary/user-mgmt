import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {



    const deleteContactHandler = (id) => {
        props.getContactId(id);
      };

      // const contacts = [
      //   {
      //     id: "1",
      //     name: "John",
      //     email: "jogn@gmail.com "
      //   },
      //   {
      //     id: "2",
      //     name: "Minkal",
      //     email: "abc@gmail.com"
      //   } 
      // ];

      const renderContactList = (props.users).map((contact) => {
        return (
          <ContactCard
            contact={contact}
            clickHander={deleteContactHandler}
            //key={contact.id}
          />
        );
      });

    return (
      <div class="main">

        <h1></h1>
        <h2>

          ContactList
        </h2>
        <div className="ui celled list">{renderContactList}</div>
      </div>
    );
    }       


export default ContactList;