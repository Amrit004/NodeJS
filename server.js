const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()
const mongoURI = 'mongodb+srv://s039914m:hNIp54TxdqSdseZV@blog.cyzg7vl.mongodb.net/?retryWrites=true&w=majority&appName=blog';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


  
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.use('/articles', articleRouter)
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'The Nature',
            createdAt: new Date(),
            description: 'A brief exploration of nature\'s endless beauty and harmony.'
        },
       
        {
            title: 'The Mysteries of the Ocean',
            createdAt: new Date(),
            description: 'Delving into the enigmatic world of deep-sea creatures and ecosystems.'
        },
        {
            title: 'Journey into the Desert',
            createdAt: new Date(),
            description: 'Discovering the hidden life and surprising adaptations of desert flora and fauna.'
        },
        {
            title: 'Forests: The Lungs of Our Planet',
            createdAt: new Date(),
            description: 'Understanding the importance of global forests and their role in sustaining life.'
        },
        {
            title: 'Urban Wildlife',
            createdAt: new Date(),
            description: 'Exploring how wildlife thrives and adapts to city environments.'
        },
        {
            title: 'Mountains: Peaks of Diversity',
            createdAt: new Date(),
            description: 'A journey to the mountains and the diverse life they harbor across elevations.'
        }
    ];

    res.render('articles/index', { articles: articles });
});


app.listen(5000)