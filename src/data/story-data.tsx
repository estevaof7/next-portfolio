import { StoryModel, StorySectionModel } from "@/models/story-model";
import { useLanguageStore } from "@/stores/language.store";

export const useStoryData = (): StorySectionModel => {
  const { isPt } = useLanguageStore();
  return {
    title: isPt ? "Minha história" : "My story",
    pictureStartsOn: "left",
    stories: [
      {
        title: isPt ? "2005-2016: Educação Básica" : "2005-2016: K-12 Education",
        description: () => {
          return isPt ? (
            <>
              Estudei todo o ensino básico em uma mesma escola da minha cidade e, desde criança, me
              interessava pela matemática e tecnologia.
            </>
          ) : (
            <>
              I studied all the basic education in the same school in my city and, from a young age,
              I have always had an interest in mathematics and technology.
            </>
          );
        },
        images: [
          {
            src: "/img/story/school-1.png",
            alt: "Elementary school",
          },
          {
            src: "/img/story/school-2.JPG",
            alt: "High school",
          },
          {
            src: "/img/story/school-3.JPG",
            alt: "High school",
          },
        ],
        aspectRatio: "16/9",
      },
      {
        title: isPt ? "2017-2019: Seminário Teológico" : "2017-2019: Theology Seminary",
        description: () => {
          return isPt ? (
            <>
              Tive a oportunidade de estudar no CFNI (Christ For the Nations Institute) em Dallas,
              Texas, onde pude aprender teologia e aprimorar meu inglês.
              <br />
              <br />
              Lá, conheci pessoas de vários lugares do mundo e trabalhei como bolsista no
              departamento de hospitalidade e eventos.
            </>
          ) : (
            <>
              I had the opportunity to study at the CFNI (Christ For the Nations Institute) in
              Dallas, Texas, where I could study theology and improve my English.
              <br />
              <br />
              There, I met people from all over the world and worked as a scholarship student in the
              hospitality and events department.
            </>
          );
        },
        images: [
          {
            src: "/img/story/usa-1.JPG",
            alt: "Seminary",
          },
          {
            src: "/img/story/usa-2.JPG",
            alt: "Seminary",
            objectFit: "contain",
          },
          {
            src: "/img/story/usa-3.JPG",
            alt: "Seminary",
            objectFit: "contain",
          },
          {
            src: "/img/story/usa-4.JPG",
            alt: "Seminary",
          },
          {
            src: "/img/story/usa-5.png",
            alt: "Seminary",
          },
          {
            src: "/img/story/usa-6.JPG",
            alt: "Seminary",
          },
        ],
        aspectRatio: "4/3",
      },
      {
        title: isPt ? "Dezembro 2019: Formatura Seminário" : "December 2019: Seminary Graduation",
        description: null,
        images: [
          {
            src: "/img/story/graduation-1.JPG",
            alt: "Graduation",
          },
          {
            src: "/img/story/graduation-2.jpg",
            alt: "Graduation",
            objectFit: "contain",
          },
          {
            src: "/img/story/graduation-3.jpg",
            alt: "Graduation",
          },
          {
            src: "/img/story/graduation-4.jpg",
            alt: "Graduation",
          },
        ],
        aspectRatio: "4/3",
      },
      {
        title: isPt ? "2020-2022: Matemática" : "2020-2022: Mathematics",
        description: () => {
          return isPt ? (
            <>
              Após voltar para o Brasil, decido estudar Licenciatura em Matemática com o objetivo de
              me tornar professor de matemática.
              <br />
              <br />E em 2022, realizo um breve estágio como professor de matemática no Colégio
              Shalom.
            </>
          ) : (
            <>
              {" "}
              After returning to Brazil, I decided to study a Bachelor's degree in Mathematics with
              the goal of becoming a mathematics teacher.
              <br />
              <br />
              And in 2022, I did a brief internship as a mathematics teacher at the Shalom College.
            </>
          );
        },
        images: [
          {
            src: "/img/story/math-1.jpg",
            alt: "Math",
          },
          {
            src: "/img/story/math-2.jpg",
            alt: "Math",
          },
          {
            src: "/img/story/math-3.png",
            alt: "Math",
          },
        ],
        aspectRatio: "3/4",
      },
      {
        title: isPt ? "2020-2024: English teacher" : "2020-2024: English teacher",
        description: () => {
          return isPt ? (
            <>
              Também logo após voltar para o Brasil, decido lecionar inglês em uma escola particular
              e eventualmente, para alunos particulares também.
              <br />
              <br />
              As aulas de inglês foram uma parte fundamental para minha carreira. Tive o privilégio
              de manter constante contato com a língua.
              <br />
              <br />
              Hoje, ainda tenho aulas semanais com três alunos particulares.
            </>
          ) : (
            <>
              I also decided to teach English in a private school and, eventually, to private
              students as well.
              <br />
              <br />
              The English classes were a fundamental part of my career. I had the privilege of
              maintaining constant contact with the language.
              <br />
              <br />
              Today, I still have weekly classes with three private students.
            </>
          );
        },
        images: [
          {
            src: "/img/story/park-1.png",
            alt: "English",
          },
          {
            src: "/img/story/park-2.png",
            alt: "English",
          },
          {
            src: "/img/story/park-3.JPG",
            alt: "English",
            objectFit: "contain",
          },
          {
            src: "/img/story/park-4.jpg",
            alt: "English",
          },
          {
            src: "/img/story/park-5.jpg",
            alt: "English",
            objectFit: "contain",
          },
        ],
        aspectRatio: "4/3",
      },
      {
        title: isPt
          ? "Fevereiro 2023: Início aos estudos de programação"
          : "February 2023: Start of programming studies",
        description: () => {
          return isPt ? (
            <>
              Após finalizar a faculdade de matemática, mesmo tenho uma aptidão pelo ensino, decido
              que lecionar Matemática não seria mais o meu foco.
              <br />
              <br />
              Decido inicializar meus estudos na área de desenvolvimento através de cursos
              independentes e uma Faculdade EAD em que pude aproveitar várias matérias que eu já
              havia estudado na faculdade de matemática.
            </>
          ) : (
            <>
              After finishing the mathematics degree, even though I have an aptitude for teaching, I
              decided that teaching mathematics would no longer be my main focus.
              <br />
              <br />I decided to start my studies in the field of development through independent
              courses and an online university where I could "recycle" many subjects that I had
              already studied in the mathematics degree.
            </>
          );
        },
        images: [
          {
            src: "/img/story/programming-1.jpEg",
            alt: "Programming",
          },
        ],
        aspectRatio: "3/4",
      },
      {
        title: isPt
          ? "Janeiro 2025: Primeiro emprego como Desenvolvedor"
          : "January 2025: First job as a Developer",
        description: () => {
          return isPt ? (
            <>
              Depois de alguns contatos com alguns profissionais da minha cidade, consigo meu
              primeiro emprego como Desenvolvedor Front End.
              <br />
              <br />A empresa é uma Software House em que prestei serviço para diversas empresas
              utilizando React e Angular.
            </>
          ) : (
            <>
              After a few contacts with some professionals in my city, I got my first job as a Front
              End Developer.
              <br />
              <br />
              The company is a Software House where I worked for several companies using React and
              Angular.
            </>
          );
        },
        images: [
          {
            src: "/img/story/amg-1.png",
            alt: "First job",
          },
          {
            src: "/img/story/amg-2.png",
            alt: "First job",
          },
          {
            src: "/img/story/amg-3.jpeg",
            alt: "First job",
          },
        ],
        aspectRatio: "3/4",
      },
      {
        title: isPt ? "Julho 2025: Dietitian" : "July 2025: Dietitian",
        description: () => {
          return isPt ? (
            <>
              Em julho de 2025, participo de um processo seletivo e sou contratado pela Dietitian,
              uma startup em que o produto principal é uma plataforma de nutrição.
              <br />
              <br />
              Atuo com o time de Frontend utilizando React, Next.js e bibliotecas complementares
              como Shadcn, Tailwind, React Hook Form, Zod, Zustand e TansTack Query.
              <br />
              <br />
              Fui responsável para criar os seguintes módulos com CRUDs completos:
              <ul className="list-disc pl-4">
                <li>
                  <b>Módulo de Refeições:</b> listagem, cadastro e visualização de refeições
                  personalizadas
                </li>
                <li>
                  <b>Módulo de Alimentos:</b> listagem de alimentos das tabelas TBCA, TACO e IBGE,
                  além do cadastro de alimentos personalizados
                </li>
                <li>
                  <b>Módulo Financeiro:</b> gerenciamento de gastos e lucros do nutricionista
                </li>
                <li>
                  <b>Módulo Daily:</b> Postagens no formato do instagram com comentários e likes
                  para o nutricionista acompanhar seus pacientes
                </li>
                <li>
                  <b>Módulo de Configurações:</b> Gerenciamento da conta do nutricionista
                </li>
                <li>
                  <b>Módulo de Integração com o WhatsApp:</b> Integração com o WhatsApp para envio
                  de mensagens e notificações
                </li>
                <li>
                  <b>Módulo de Prontuário:</b> Gerenciamento de prontuários de pacientes
                </li>
                <li>
                  <b>Módulo de Questionário:</b> Gerador de formulários interativos
                </li>
              </ul>
            </>
          ) : (
            <>
              In July 2025, I participated in a selection process and was hired by Dietitian, a
              startup where the main product is a nutrition platform.
              <br />
              <br />
              I work with the Frontend team using React, Next.js and complementary libraries like
              Shadcn, Tailwind, React Hook Form, Zod, Zustand and TansTack Query.
              <br />
              <br />
              I was responsible for implementing essential application modules, including:
              <br />
              <br />
              <ul className="list-disc pl-4">
                <li>
                  <b>Meals Module:</b> listing, registration, and visualization of personalized
                  meals
                </li>
                <li>
                  <b>Foods Module:</b> listing of foods from TBCA, TACO, and IBGE tables, in
                  addition to registering personalized foods
                </li>
                <li>
                  <b>Financial Module:</b> management of nutritionist expenses and profits
                </li>
                <li>
                  <b>Daily Module:</b> Posts in the format of the instagram with comments and likes
                  for the nutritionist to track their patients
                </li>
                <li>
                  <b>Settings Module:</b> Management of the nutritionist's account
                </li>
                <li>
                  <b>WhatsApp Integration Module:</b> Integration with WhatsApp for sending messages
                  and notifications
                </li>
                <li>
                  <b>Medical Record Module:</b> Management of patients' medical records
                </li>
                <li>
                  <b>Questionnaire Module:</b> Interactive form generator
                </li>
              </ul>
            </>
          );
        },
        images: [
          {
            src: "/img/story/dietitian-1.png",
            alt: "Dietitian",
          },
          {
            src: "/img/story/dietitian-2.png",
            alt: "Dietitian",
            objectFit: "contain",
          },
        ],
        aspectRatio: "4/3",
      },
    ],
  };
};
