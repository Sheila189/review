const Alexa = require('ask-sdk-core');

let userData = {
  monthlyIncome: 0,
  monthlyBudget: 0,
  totalExpenses: 0
};

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = '¡Bienvenido a tu gestor de presupuesto! ¿Qué te gustaría hacer? Por favor, puedes decirme tu sueldo mensual, establecer un presupuesto, agregar gastos, consultar tu presupuesto o pedir un reporte de deuda o ahorro.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('¿Qué te gustaría hacer?')
      .getResponse();
  }
};

const SetMonthlyIncomeIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'SetMonthlyIncomeIntent';
  },
  handle(handlerInput) {
    const income = handlerInput.requestEnvelope.request.intent.slots.Income.value;
    if (income) {
      userData.monthlyIncome = parseInt(income, 10);
      const speakOutput = `¡Entendido! Tu sueldo mensual es de ${income} pesos.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    } else {
      const speakOutput = 'Por favor, repite tu sueldo mensual.';
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('¿Cuál es tu sueldo mensual, por favor?')
        .getResponse();
    }
  }
};

const SetMonthlyBudgetIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'SetMonthlyBudgetIntent';
  },
  handle(handlerInput) {
    const budget = handlerInput.requestEnvelope.request.intent.slots.Budget.value;
    if (budget) {
      userData.monthlyBudget = parseInt(budget, 10);
      const speakOutput = `¡Perfecto! Tu presupuesto mensual es de $${budget}.`;
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    } else {
      const speakOutput = 'Por favor, repite tu presupuesto mensual.';
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('¿Cuál es tu presupuesto mensual, por favor?')
        .getResponse();
    }
  }
};

const AddExpenseIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'AddExpenseIntent';
  },
  handle(handlerInput) {
    const expense = handlerInput.requestEnvelope.request.intent.slots.Expense.value;
    if (expense) {
      userData.totalExpenses += parseInt(expense, 10);
      let speakOutput = `¡Listo! Gasto de $${expense} registrado.`;

      if (userData.totalExpenses > userData.monthlyBudget) {
        speakOutput += ` Has excedido tu presupuesto mensual por $${userData.totalExpenses - userData.monthlyBudget}.`;
      } else {
        speakOutput += ` Te quedan $${userData.monthlyBudget - userData.totalExpenses} de tu presupuesto.`;
      }

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .getResponse();
    } else {
      const speakOutput = 'Por favor, repite el monto del gasto.';
      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('¿Cuánto fue el gasto, por favor?')
        .getResponse();
    }
  }
};

const CheckBudgetVsExpensesIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'CheckBudgetVsExpensesIntent';
  },
  handle(handlerInput) {
    const balance = userData.monthlyBudget - userData.totalExpenses;
    const speakOutput = `Tu saldo actual es de $${balance}.`;
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

const ReportDebtOrSavingsIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'ReportDebtOrSavingsIntent';
  },
  handle(handlerInput) {
    let speakOutput = '';
    if (userData.totalExpenses > userData.monthlyBudget) {
      speakOutput = `Tienes una deuda de $${userData.totalExpenses - userData.monthlyBudget}.`;
    } else {
      speakOutput = `Has ahorrado $${userData.monthlyBudget - userData.totalExpenses}.`;
    }
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Por favor, puedes decirme tu sueldo mensual, establecer un presupuesto, agregar gastos, consultar tu presupuesto o pedir un reporte de deuda o ahorro. ¿Cómo te puedo ayudar?';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('¿En qué más te puedo ayudar, por favor?')
      .getResponse();
  }
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
           (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speakOutput = '¡Adiós! Por favor, regresa pronto.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Sesión finalizada: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse(); // No speech
  }
};

const IntentReflectorHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
  },
  handle(handlerInput) {
    const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
    const speakOutput = `Has llamado al intento ${intentName}`;
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error manejado: ${error.message}`);
    const speakOutput = 'Lo siento, hubo un problema. Por favor, inténtalo de nuevo más tarde.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    SetMonthlyIncomeIntentHandler,
    SetMonthlyBudgetIntentHandler,
    AddExpenseIntentHandler,
    CheckBudgetVsExpensesIntentHandler,
    ReportDebtOrSavingsIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler
  )
  .addErrorHandlers(
    ErrorHandler
  )
  .lambda();
