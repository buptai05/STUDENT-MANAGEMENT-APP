const mongoose= require("mongoose");
var studentschema = new mongoose.Schema({

        name: {
                type:String,
                required:false},
        email: {
                type:String,
                required:false},
        phone: {
                type:Number,
                required:false},
        discipline: {
                type:String,
                required:false},
        department: {
                type:String,
                required:false},
        year: {
                type:String,
                required:false},
        universityRollNo: {
                type:Number,
                required:false},
        passingYear:{
                type:Number,
                required:false},
        studentImage:{
                type:String,
                required:false},
});
const Student = module.exports = mongoose.model('student', studentschema);