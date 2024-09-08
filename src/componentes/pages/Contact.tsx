
import React, {useState} from 'react';

type Contact = {
  id: number;
  name: string;
  email: string;
}

const Contact: React.FC = () => {

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContact, setNewContact] = useState({name:'', email:''});

  //Para Crear Un Nuevo Contacto
  const createContact = () =>{
    const newId = contacts.length ? contacts[contacts.length -1].id + 1: 1;
    setContacts([...contacts,{id: newId, name: newContact.name, email: newContact.email}]);
    setNewContact({name:'', email:''});
  };

  //Para Eliminar Contacto

  const deleteContact = (id: number) =>{
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  //Para Actualizar Nombre E Imail

  const updateContact = (id: number, updateContact: Contact) => {
    const updateContacts = contacts.map(contact => contact.id === id ? updateContact : contact);
    setContacts(updateContacts);
  };


  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Lista de Contacto
        </h1>

        {/*Formulario de contacto*/}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Name"
            value={newContact.name}
            onChange={e => setNewContact({ ...newContact, name: e.target.value })}
            className="border p-2 rounded-md w-full mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={newContact.email}
            onChange={e => setNewContact({ ...newContact, email: e.target.value })}
            className="border p-2 rounded-md w-full mb-4"
          />
          <button
            onClick={createContact}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Crear Contacto
          </button>
        </div>

        {/* Mostrar lista de contactos */}
        <div className="space-y-4">
          {contacts.map(contact => (
            <div key={contact.id} className="border p-4 rounded-md shadow-md flex justify-between items-center">
              <div>
                <p className="font-bold">{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <div className="flex space-x-2">
                {/* Botón para actualizar contacto */}
                <button
                  onClick={() => updateContact(contact.id, { ...contact, name: contact.name + ' (Updated)' })}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Actualizar
                </button>

                {/* Botón para eliminar contacto */}
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {contacts.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No hay contactos disponibles, agrega uno!</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
