import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import '../CSS/Table.css';

class BookTable extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         books: [
            { serialNum: 1, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 2, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 3, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 4, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 5, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 6, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 7, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 8, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 9, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 10, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
            { serialNum: 11, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"}
         ],
         Names: { serialNum: "رقم التسلسل", bookName: 'الكتاب', chapter: "الجزء", topic: 'الموضوع', author: "المؤلف", editor: "المدقق", publisher: "الناشر", part:"الجزء", year: "السنة",group:"المجموعة"},

      }
   }

   renderTableData() {
      return this.state.books.map((book, index) => {
         const { serialNum, bookName, chapter, topic, author, editor, publisher,part,year, group} = book //destructuring
         return (
           <React.Fragment key={serialNum}>
            <tr>
            <td>{group}</td>
            <td>{year}</td>
            <td>{part}</td>
            <td>{publisher}</td>
            <td>{editor}</td>
            <td>{author}</td>
            <td>{topic}</td>
            <td>{chapter}</td>
            <td> {bookName}</td>
            <td>{serialNum}</td>
            </tr>
            </React.Fragment>


         )
      })
   }


   renderTableHeader() {

         let header = Object.values(this.state.Names).reverse()
         return header.map((value, index) => {
            return <th key={index}>{value}</th>
         })
      }

      render() {
         return (
            <div>
               <h1 id='title'>قاعدة بيانات المكتبة</h1>
               <Table id='books' striped bordered hover >
               <thead>
                <tr>
                {this.renderTableHeader()}
                </tr>
              </thead>
                  <tbody>
                    {this.renderTableData()}
                  </tbody>
               </Table>
            </div>
         )
      }
}

export default BookTable
