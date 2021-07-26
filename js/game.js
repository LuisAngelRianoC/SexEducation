const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []; 

let questions = [
  {
    question: " ¿Que es la homosexualidad?",
    choice1: "Amar a personas solo de tu mismo sexo",
    choice2: "Es la atracción sexual hacia el mismo sexo",
    choice3: "Atracción sexual hacia el sexo opuesto",
    answer: "1",
  },
  {
    question: " ¿Que es  el squirt femenino?",
    choice1: "Es el líquido expulsado por la próstata femenina",
    choice2: "Es un tipo de orgasmo femenino",
    choice3: "Es la expulsión de líquido desde la vejiga urinaria",
    answer: "3",
  },
  {
    question: " ¿Tener relaciones de pie evita el embarazo?",
    choice1: "Si",
    choice2: "No, no importa la posición",
    choice3: "Si, porque el semen es expulsado al exterior",
    answer: "2",
  },
  {
    question: " ¿Qué son las hepatitis B y C?",
    choice1: "Son infecciones producidas por un parasito",
    choice2: "Son infecciones bacterianas",
    choice3: "Son infecciones víricas",
    answer: "3",
  },
  {
    question:
      " ¿La masturbación hace que salgan granos y puede causar impotencia e infertilidad?",
    choice1: " No, son mitos sobre la masturbación masculina ",
    choice2: "Si, puede causar acné",
    choice3: " Si, pero solo puedo causar infertilidad ",
    answer: "1",
  },
  {
    question: " ¿Qué es la eyaculación femenina?",
    choice1: "Liquido expulsado desde la vejiga urinaria",
    choice2: "Liquido que procede de las glándulas skene",
    choice3: "Es lo mismo que el squirt",
    answer: "2",
  },
  {
    question: " ¿Cuándo se puede hacer el test de embarazo?",
    choice1: "Después de los 5 días de la relación",
    choice2: "Justo después de la relación",
    choice3: "Después de 14-15 días de la relación ",
    answer: "3",
  },
  {
    question: " ¿Si tienes problemas sexuales a qué especialista debes acudir?",
    choice1: "A un médico/a ",
    choice2: "A un médico/a o a un psicólogo/a",
    choice3: "A un médico/a, psicólogo/a y sexólogo/a",
    answer: "3",
  },
  {
    question: " ¿Hasta que mes de embarazo se puede abortar?",
    choice1: "Por causas medicas hasta los 22 semanas",
    choice2: "Por decisión de la mujer, hasta la semana 14",
    choice3: "Ambas son correctas",
    answer: "3",
  },
  {
    question: " ¿Qué es la gestación?",
    choice1: "El primer mes del embarazo",
    choice2: "Llevar y sustentar un embrión en el vientre",
    choice3: "Es la unión entre el ovulo y el espermatozoide",
    answer: "2",
  },
  {
    question: " ¿Qué es el sexo?",
    choice1: "Ambas son correctas",
    choice2: "Concepto que nos clasifica como hembras y machos",
    choice3: "Pertenencia individual a un género u otro",
    answer: "3",
  },
  {
    question:
      " ¿Se puede quedar embarazada si todavía no se ha tenido la primer menstruación?",
    choice1: "Si",
    choice2: "No",
    choice3: "Si, en casos excepcionales",
    answer: "1",
  },
  {
    question:
      " Me gustan las/os chicas/os, pero ¿si me atrae alguien de mi mismo sexo,  soy homosexual?",
    choice1: "Eres bisexual",
    choice2: "No necesariamente",
    choice3: "Si",
    answer: "2",
  },
  {
    question: " ¿Qué función tiene el vello púbico?",
    choice1: "Permite mantener una temperatura estable",
    choice2: "Para evitar la entrada de ciertas infecciones",
    choice3: "Ambas son correctas",
    answer: "3",
  },
  {
    question:
      " ¿Si se lava justo después de la penetración y eyaculación se evita quedar embarazada?",
    choice1: "Así es los espermatozoides salen al exterior",
    choice2: "Si",
    choice3: "No",
    answer: "3",
  },
  {
    question:
      " ¿Lo mejor para evitar el embarazo y el contagio del sida es colocarse dos preservativos?",
    choice1: "No",
    choice2: "La doble capa puede dificultar la rotura",
    choice3: "Si",
    answer: "1",
  },
  {
    question: " ¿Qué es la virginidad?",
    choice1: "No acostarse con más de una persona",
    choice2: "Es una construcción social sin fundamento biológico",
    choice3: "Cuando no has tenido relaciones sexuales",
    answer: "2",
  },
  {
    question: " ¿Qué es la eyaculación retrograda?",
    choice1: "Eyacular sin tener orgasmo",
    choice2: "Una eyaculación lenta",
    choice3: "Le mezcla entre la eyaculación y la orina",
    answer: "3",
  },
  {
    question:
      " ¿Cuál es la hormona principal que provoca los cambios de la pubertad en el hombre?",
    choice1: "Testosterona",
    choice2: "Progesterona",
    choice3: "Estrógenos",
    answer: "1",
  },
  {
    question: " ¿Es malo que los hombres no eyaculen?",
    choice1: "Si, los espermatozoides tienen que salir",
    choice2: "Si, el líquido seminal tiene que salir",
    choice3: "No, no eyacular no es perjudicial para el hombre",
    answer: "3",
  },
  {
    question: " ¿Qué es la menstruación?",
    choice1: "Expulsión de sangre y óvulo",
    choice2: "Expulsión del óvulo no fecundado",
    choice3: "Expulsión de una parte del endometrio",
    answer: "2",
  },
  {
    question: " ¿Qué es la ovogénesis?",
    choice1: "Maduración de los óvulos",
    choice2: "La ovulación",
    choice3: "Desprendimiento del óvulo",
    answer: "1",
  },
  {
    question: " ¿Qué es el abuso sexual?",
    choice1: "Conducta sexual realizada sin consentimiento",
    choice2: "Conducta sexual realizada con consentimiento",
    choice3: "Conducta sexual realizada con violencia o intimidación",
    answer: "1",
  },
  {
    question: " ¿Qué son los roles de género?",
    choice1: "Conjunto de conductas que tienen los homosexuales",
    choice2: "Conjunto de normas diferentes para cada sexo",
    choice3: "Conjunto de conductas que se dan en la infancia",
    answer: "2",
  },
  {
    question: " ¿Qué significan las siglas ITS?",
    choice1: "Infecciones de transmisión sexual",
    choice2: "Método anticonceptivo parecido al implante",
    choice3: "Enfermedades de trasmisión sexual",
    answer: "1",
  },
  {
    question: " ¿Qué es la clamidia?",
    choice1: "Es una infección causada por un parasito ",
    choice2: "Es una infección bacteriana muy común",
    choice3: "Es una infección causada por un virus",
    answer: "2",
  },
  {
    question: " ¿Qué es la androginia?",
    choice1: "Tener rasgos de personales asignados a hombres",
    choice2: "Tener rasgos personales de ambos sexos",
    choice3: "Tener rasgos personales asignados a mujeres",
    answer: "2",
  },
  {
    question: " ¿Qué es el acoso sexual?",
    choice1: "Conducta física que atente contra la libertad sexual",
    choice2: "Conducta sexual que atente contra la libertad sexual",
    choice3: "Conducta verbal que atente contra la libertad sexual",
    answer: "3",
  },
  {
    question: " ¿Qué eficiencia tiene el preservativo masculino?",
    choice1: "96% de eficiencia, 1 de cada 25 relaciones",
    choice2: "5 de cada 100 embarazos anuales",
    choice3: "Menos de 1 de cada 100 embarazos anuales",
    answer: "1",
  },
  {
    question: " ¿Cuándo se tiene más probabilidad de quedar embarazada?",
    choice1: "Los primeros cinco días de la menstruación",
    choice2: "Durante la ovulación",
    choice3: "Durante todo el ciclo menstrual",
    answer: "2",
  },
  {
    question: " ¿Qué es la sexualidad?",
    choice1: "Es la ciencia que estudia los genitales humanos",
    choice2: "Son las prácticas sexuales",
    choice3: "Es una dimensión bio-psico-social",
    answer: "3",
  },
  {
    question: " ¿Qué son los juegos sexuales infantiles?",
    choice1: "Ambas son correctas",
    choice2: "Juego de imitación de adultos",
    choice3: "juegos de exploración corporal propio",
    answer: "3",
  },
  {
    question: " ¿Qué es el líquido seminal?",
    choice1: "Es un conjunto de secreciones, el semen",
    choice2: "Ambas son correctas",
    choice3: "Es el conjunto de espermatozoides",
    answer: "2",
  },
  {
    question: " ¿Qué es el Virus del Papiloma Humano?",
    choice1: "Es una infección provocada por un parasito",
    choice2: "Es una infección provocada por una bacteria",
    choice3: "Es una infección provocada por un virus",
    answer: "3",
  },
  {
    question: " ¿Qué es la PrEP?",
    choice1: "Medicamento que cura el VIH",
    choice2: "Medicamento contra el VIH",
    choice3: "Es un tipo de medicamento para prevenir el VIH",
    answer: "3",
  },
  {
    question: " ¿Cuáles son los riesgos del aborto?",
    choice1: "No existen riesgos",
    choice2: "Calambres y un pequeño sangrado",
    choice3: "Un sangrado fuerte a los pocos días del aborto",
    answer: "2",
  },
  {
    question: " ¿Qué es el clítoris?",
    choice1: "Ambas son correctas",
    choice2: "Órgano de poca importancia sexual",
    choice3: "Órgano sexual formado por dos cuerpos cavernosos",
    answer: "3",
  },
  {
    question:
      " ¿Una mujer se puede quedar embarazada si tiene la menstruación durante le coito?",
    choice1: "Si, pero no con la primera menstruación",
    choice2: "Si",
    choice3: "No",
    answer: "2",
  },
  {
    question:
      " ¿Cuáles son la/las hormonas que provocan los cambios de la pubertad en la mujer?",
    choice1: "Estrógenos, progesterona y estradiol",
    choice2: "Progesterona",
    choice3: "Testosterona",
    answer: "1",
  },
  {
    question: " ¿Qué es la violación ?",
    choice1: "Es una agresión sexual",
    choice2: "Se consigue por medio de violencia y/o intimidación",
    choice3: "Ambas son correctas",
    answer: "3",
  },
  {
    question: " ¿Qué es la píldora del día después ?",
    choice1: "Es un anticonceptivo que previene las ITS",
    choice2: "Es un anticonceptivo de URGENCIA",
    choice3: "Es un anticonceptivo de uso habitual y semanal",
    answer: "2",
  },
  {
    question: " ¿Qué es el DIU?",
    choice1: "Un implante hormonal para evitar los embarazos",
    choice2: "Es un tipo de píldora para evitar embarazos",
    choice3: "Pequeño dispositivo que se coloca en el útero",
    answer: "1",
  },
  {
    question: " ¿Siempre duele la primera penetración vaginal?",
    choice1: "Solo en casos excepcionales",
    choice2: "Si",
    choice3: "No",
    answer: "3",
  },
  {
    question: " ¿Qué es la menarquia?",
    choice1: "Es el periodo anterior a la primera menstruación ",
    choice2: "Es la última menstruación ",
    choice3: "Es la primera menstruación",
    answer: "3",
  },
  {
    question: " ¿Qué es el aborto?",
    choice1: "Interrupción del embarazo antes de la fecundación ",
    choice2: "Interrupción del embarazo después del primer mes",
    choice3: "Interrupción y finalización prematura del embarazo",
    answer: "1",
  },
  {
    question: " ¿Qué es el orgasmo?",
    choice1: "Es una respuesta neurovegetativa refleja",
    choice2: "Es una respuesta que dura más en las mujeres",
    choice3: "Es una respuesta aprendida",
    answer: "1",
  },
  {
    question: " ¿Qué es el VIH?",
    choice1: "Es un parasito que ataca el sistema inmunitario",
    choice2: "Es la bacteria que produce el SIDA",
    choice3: "Es el virus que produce el SIDA",
    answer: "1",
  },
  {
    question: " ¿Qué es apego?",
    choice1: "Vinculo social entre el bebé y el padre",
    choice2: "Vínculo afectivo entre el bebé y la madre",
    choice3: "Vínculo afectivo entre el niño y sus cuidadores",
    answer: "3",
  },
  {
    question:
      " ¿Cuántas veces se puede tomar la píldora del día después en un año?",
    choice1: "Una vez al mes",
    choice2: "Una vez al año",
    choice3: "Todos los dias",
    answer: "2",
  },
  {
    question: " ¿Qué es la ovulación?",
    choice1: "Se produce de manera clínica",
    choice2: "Ambas son correctas",
    choice3: "Es la maduración y liberación del ovulo",
    answer: "3",
  },
  {
    question: " ¿Qué es la fecundación?",
    choice1: "Ambas son correctas",
    choice2: "Se produce en el útero",
    choice3: "Es la unión entre el ovulo y el espermatozoide",
    answer: "3",
  },
  {
    question: " ¿Qué es la espermatogénesis?",
    choice1: "Proceso de formación del líquido seminal",
    choice2: "Proceso de formación de los espermatozoides",
    choice3: "Proceso de formación del semen",
    answer: "2",
  },
];

const SCORE_POINTS = 10
const MAX_QUESTIONS = 30

starGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    
    return window.location.assign("/end.html");
  }


  questionCounter++
  progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

  const questionindex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionindex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionindex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correcto" : "incorrecto";

    if (classToApply === "correcto") {
      incrementScore(SCORE_POINTS)
    } 
      
    selectedChoice.parentElement.classList.add(classToApply);

    if (classToApply === "incorrecto") {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/end.html");
  }
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);

  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

starGame();
