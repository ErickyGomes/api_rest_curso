import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Helena',
      sobrenome: 'Gomes',
      email: 'helena.gomes100@gmail.com.br',
      idade: 33,
      peso: '70',
      altura: '1.70',
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
