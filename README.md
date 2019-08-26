## Dependencias utilizadas

**_Anotações sobre as dependencias utilizadas no projeto e como funcionam._**

---

`Sucrase`
Faz com que seja permitido a utilização do padrão " import x from 'x' ". Deve ser configurado junto ao nodemon para correta interpretação do código;

---

`ESLint`: Utilizado para manter o código identado e padronizado. Deve ser instalado o plugin no VSCODE e adicionado a dependencia no projeto. Foi utilizado o padrão AirBnb.

---

`Prettier`: Assim como o anterior, é utilizado para manter código identado, mas possui algumas outras identificações para que o código fique mais legivel e agradável. Trabalha em conjunto com o ESLint e também precisa do plugin no VSCODE;

---

`Editor Config`: Não precisa de dependencia instalada, pois se trata de um plugin para VSCODE. Ele faz com que o projeto se mantenha igual quando o time utiliza diferentes editores de código.

---

`Sequelize migration`

Para criar uma nova migration com o sequelize CLI basta utilizar o comando:

```
yarn sequelize migration:create --name=name-migration
```

Para executar uma migrate, basta:

```
yarn sequelize db:migrate
```

E para desfazer a ultima migration, utilize:
```
yarn sequelize db:migrate:undo
```
