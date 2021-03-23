import {React, useState} from 'react';

const MyForm = () => {
  const [form, setForm] = useState({
    name: '',
    city: '',
    age: '',
  });
  
  const handleFormChange = (e) => {
    const target = e.target;
    
    setForm(form => ({ 
      ...form,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    setForm({
      name: '',
      city: '',
      age: '',
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="name ..." onChange={handleFormChange} value={form.name} autoComplete="off"/>
        <input name="city" type="text" placeholder="city..." onChange={handleFormChange} value={form.city} autoComplete="off"/>
        <input name="age" type="text" placeholder="age.." onChange={handleFormChange} value={form.age}/>
        <input type="submit" value="send"/>
      </form>

      <p style={{fontWeight: 700}}>Name: {form.name}</p>
      <p style={{fontWeight: 700}}>City: {form.city}</p>
      <p style={{fontWeight: 700}}>Age: {form.age}</p>
    </>
  );
};

export default MyForm;