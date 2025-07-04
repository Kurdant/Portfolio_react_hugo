import {useState, React, useEffect} from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import Banner from "../../components/banner/banner";
import Menu from "../../components/menu/menu";
import './login.css'

function Login() {

    // LOGIN

    const [users, setUsers] = useState([]);
    const [nom, setNom] = useState('');
    const [mail, setMail] = useState('');
  
    const handleSubmit1 = (e) => {
      e.preventDefault(); 
  
      api.post('/users', {
        name: nom,
        email: mail
      })
        .then((res) => {
          setUsers([...users, res.data]);
          setNom(''); 
          setMail(''); 
        })
        .catch((err) => {
          console.error(err);
        });
    };

    // CONNEXION

    const [userList, setUserList] = useState([]);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    // const name = localStorage.getItem('name');
    // const email = localStorage.getItem('email');
    // console.log(name, email);
    // // if (name === null || email === null) {
    // //     navigate('/');
    // // }
    // }, []);

    useEffect(() => {
    api.get('/users')
        .then(res => {
        setUserList(res.data);
        })
        .catch(err => {
        console.error(err);
        });
    }, []);

    // Fonction pour envoyer un nouvel utilisateur
    const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger

    // Envoi des données au serveur
    api.post('/users', {
        name: userName,
        email: userEmail
    })
        .then((res) => {
        // Mettre à jour la liste des utilisateurs avec le nouvel utilisateur
        setUserList([...userList, res.data]);
        setUserName(''); // Réinitialiser le champ nom
        setUserEmail(''); // Réinitialiser le champ mail
        })
        .catch((err) => {
        console.error(err);
        });
    };

    // Fonction pour supprimer un utilisateur
    const handleDelete = (id) => {
    api.delete(`/users/${id}`)
        .then((res) => {
        // Supprime l'utilisateur de la liste
        setUserList(userList.filter(user => user.id !== id));
        console.log(res.data);
        })
        .catch((err) => {
        console.error(err);
        });
    };

  

    return(
            <div className='login'>
              <div className=''>
                <h1>Log toi</h1>
                <h2>Je me log</h2>
                <form onSubmit={handleSubmit1}>
                  <label>
                    Nom :
                    <input type="text" name="name" value={nom} onChange={(e) => setNom(e.target.value)} />
                  </label>
                  <label>
                    Mail :
                    <input type="email" name="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
                  </label>
                  <input type="submit" value="Envoyer" />
                </form>
              </div>
              <div>
              {/* <div>
                <h1>Liste des utilisateurs</h1>
                <ul>
                    {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleDelete(user.id)}>Supprimer</button>
                    </li>
                    ))}
                </ul>

                <h1>Ajouter un utilisateur</h1>
                <button onClick={() => navigate('/login')}>Login</button>
                <form onSubmit={handleSubmit}>
                    <label>
                    Nom :
                    <input type="text" name="name" value={nom} onChange={(e) => setNom(e.target.value)} />
                    </label>
                    <label>
                    Mail :
                    <input type="email" name="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
                </div> */}
              </div>
            </div>
          );
}

export default Login;