import classes from './NewPost.module.css';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { redirect } from 'react-router-dom';

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name='body' required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" name='name' id="name" required />
      </p>
      <p className={classes.actions}>
        <Link className={classes.button} to='/'>Cansel</Link>
        <button>Add</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

export async function postAction ({request}) {
  const data = await request.formData();
  const post = {
    author: data.get('name'),
    body: data.get('body'),
  }

  const res = await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return redirect('/');
}
