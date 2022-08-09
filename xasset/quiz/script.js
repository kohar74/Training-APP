var quiz = {
  user: "Dave",
  questions: [
{
    text: "PARACETAMOL termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS", correct: true },
    { text: "OBAT KERAS" },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "AMOXICILIN termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "IBUPROFEN termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "CHLORPHERAMIN MALEAT termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS", correct: true },
    { text: "OBAT KERAS" },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "ANTASIDA DOEN termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS", correct: true },
    { text: "OBAT KERAS" },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "METHYL PRENDISOLONE termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "AMBROXOL termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "PIL KB termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "RANITIDINE termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "CODEIN termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS" },
    { text: "NARKOTIKA", correct: true },
    { text: "PSIKOTROPIKA" }] },
{
    text: "DIAZEPAM termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS" },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA", correct: true }] },
{
    text: "CEFADROXIL termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "MEFENAMIC ACID termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "METAMIZOL SODIUM termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "AMYNOPHYLLINE termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS", correct: true },
    { text: "OBAT KERAS" },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "PONSTAN termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "ALPRRAZOLAM termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS" },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA", correct: true }] },
{
    text: "LANSOPRAZOLE termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },
{
    text: "AMLODIPINE termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] },	
{
    text: "CATAFLAM 50MG TAB termasuk golongan obat apa ?",
    responses: [
    { text: "OBAT BEBAS" },
    { text: "OBAT KERAS", correct: true },
    { text: "NARKOTIKA" },
    { text: "PSIKOTROPIKA" }] }] },




userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } } });