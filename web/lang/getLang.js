export default function (lang) {
  return {
    default: require('./' + lang + '/default.json'),
    navigation: require('./' + lang + '/navigation.json'),
    header: require('./' + lang + '/header.json'),
    branches: require('./' + lang + '/branches.json'),
    branchesSubpage: {
      hairdresser: require('./' + lang + '/branches/hairdresser.json'),
      insurance: require('./' + lang + '/branches/insurance.json'),
      workshop: require('./' + lang + '/branches/workshop.json'),
      tattoo: require('./' + lang + '/branches/tattoo.json'),
      doctor: require('./' + lang + '/branches/doctor.json'),
      craftsmen: require('./' + lang + '/branches/craftsmen.json'),
      consultant: require('./' + lang + '/branches/consultant.json'),
      cosmetics: require('./' + lang + '/branches/cosmetics.json'),
      fitness: require('./' + lang + '/branches/fitness.json'),
      restaurant: require('./' + lang + '/branches/restaurant.json'),
      covid: require('./' + lang + '/branches/covid.json'),
      photographer: require('./' + lang + '/branches/photographer.json'),
      museum: require('./' + lang + '/branches/museum.json'),
      fun: require('./' + lang + '/branches/fun.json'),
      school: require('./' + lang + '/branches/school.json'),
      therapy: require('./' + lang + '/branches/therapy.json'),
      rental: require('./' + lang + '/branches/rental.json'),
      administration: require('./' + lang + '/branches/administration.json'),
      shopping: require('./' + lang + '/branches/shopping.json')
    },
    documentationSubpage: {
      eventCalendar: require('./' + lang + '/documentation/eventCalendar.json'),
      serviceCalendar: require('./' + lang + '/documentation/serviceCalendar.json'),
      businessCalendar: require('./' + lang + '/documentation/businessCalendar.json'),
      dashboard: require('./' + lang + '/documentation/dashboard.json'),
      appointmentConfirmation: require('./' + lang + '/documentation/appointmentConfirmation.json'),
      services: require('./' + lang + '/documentation/services.json'),
      connectCalendar: require('./' + lang + '/documentation/connectCalendar.json'),
      shareCalendar: require('./' + lang + '/documentation/shareCalendar.json'),
      bookingGroup: require('./' + lang + '/documentation/bookingGroup.json'),
      holidays: require('./' + lang + '/documentation/holidays.json'),
      downloadCSV: require('./' + lang + '/documentation/downloadCSV.json'),
      editMails: require('./' + lang + '/documentation/editMails.json'),
      appointmentExport: require('./' + lang + '/documentation/appointmentExport.json'),
      googleSync: require('./' + lang + '/documentation/googleSync.json'),
      microsoftSync: require('./' + lang + '/documentation/microsoftSync.json'),
      addAppointment: require('./' + lang + '/documentation/addAppointment.json'),
      confirmation: require('./' + lang + '/documentation/confirmation.json'),
      emailReminder: require('./' + lang + '/documentation/emailReminder.json'),
      smsReminder: require('./' + lang + '/documentation/smsReminder.json'),
      search: require('./' + lang + '/documentation/search.json'),
      smsCredits: require('./' + lang + '/documentation/smsCredits.json'),
      clientChat: require('./' + lang + '/documentation/clientChat.json'),
      bookingPage: require('./' + lang + '/documentation/bookingPage.json'),
      calendarContact: require('./' + lang + '/documentation/calendarContact.json'),
      stats: require('./' + lang + '/documentation/stats.json'),
      qrCode: require('./' + lang + '/documentation/qrCode.json'),
      serialAppointments: require('./' + lang + '/documentation/serialAppointments.json'),
      formfieldAGB: require('./' + lang + '/documentation/formfieldAGB.json'),
      embed: require('./' + lang + '/documentation/embed.json'),
      multiAppointments: require('./' + lang + '/documentation/multiAppointments.json'),
      appointmentsTomorrow: require('./' + lang + '/documentation/appointmentsTomorrow.json'),
      verify: require('./' + lang + '/documentation/verify.json'),
      notes: require('./' + lang + '/documentation/notes.json'),
      ownMailbox: require('./' + lang + '/documentation/ownMailbox.json'),
      webinarTool: require('./' + lang + '/documentation/webinarTool.json'),
      webhooks: require('./' + lang + '/documentation/webhooks.json'),
      // maxAppointments: require('./' + lang + '/documentation/maxAppointments.json'),
      clientLogin: require('./' + lang + '/documentation/clientLogin.json'),
      ratings: require('./' + lang + '/documentation/ratings.json'),
      smsConfirmation: require('./' + lang + '/documentation/smsConfirmation.json'),
      deleteAccount: require('./' + lang + '/documentation/deleteAccount.json')
    },
    benefits: require('./' + lang + '/benefits.json'),
    functionality: require('./' + lang + '/functionality.json'),
    clients: require('./' + lang + '/clients.json'),
    features: require('./' + lang + '/features.json'),
    featureSubpage: {
      individualCalendar: require('./' + lang + '/features/individualCalendar.json'),
      reminder: require('./' + lang + '/features/reminder.json'),
      workflow: require('./' + lang + '/features/workflow.json'),
      dashboard: require('./' + lang + '/features/dashboard.json'),
      publishCalendar: require('./' + lang + '/features/publishCalendar.json'),
      clients: require('./' + lang + '/features/clients.json'),
      editCalendar: require('./' + lang + '/features/editCalendar.json'),
      votes: require('./' + lang + '/features/votes.json'),
      privacy: require('./' + lang + '/features/privacy.json')
    },
    featureList: require('./' + lang + '/featurelist.json'),
    footer: require('./' + lang + '/footer.json'),
    support: require('./' + lang + '/support.json'),
    price: require('./' + lang + '/price.json'),
    aboutUs: require('./' + lang + '/aboutUs.json'),
    clickMeet: require('./' + lang + '/clickMeet.json'),
    faq: require('./' + lang + '/faq.json')
  }
}
