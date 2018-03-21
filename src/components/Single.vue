<template>
    <div class="container">
        <h2>{{ story.title }}</h2>
        <p>Score: {{ story.score }}</p>
        <p>{{ story.url }}</p>
        <div v-for="comment in comments" :key="comment">
          <div class="comment-wrap">
                <div class="comment-block">
                    <p class="comment-text">{{ comment.text }}</p>
                    <div class="bottom-comment">
                        <div class="comment-author">{{ comment.by }}</div>
                        <div class="comment-date">{{ comment.time }}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Single',
  data: function () {
    return {
      story: {},
      comments: []
    }
  },
  created: function () {
    axios.get('https://hacker-news.firebaseio.com/v0/item/' + this.$route.params.id + '.json')
      .then((res) => {
        this.story = res.data
        this.story.comments = []
        this.story.kids.forEach(id => {
          axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
            .then((res) => {
              this.$nextTick(() => {
                console.log(res.data)
                this.comments.push(res.data)
              })
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

.comment-wrap {
  margin-bottom: 1.25rem;
  display: table;
  width: 100%;
  min-height: 5.3125rem;
}

.photo {
  padding-top: 0.625rem;
  display: table-cell;
  width: 3.5rem;
}
.photo .avatar {
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  background-size: contain;
}

.comment-block {
  padding: 1rem;
  background-color: #fff;
  display: table-cell;
  vertical-align: top;
  border-radius: 0.1875rem;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}
.comment-block textarea {
  width: 100%;
  resize: none;
}

.comment-text {
  margin-bottom: 1.25rem;
}

.bottom-comment {
  color: #acb4c2;
  font-size: 0.875rem;
}

.comment-date {
  float: left;
}

.comment-actions {
  float: right;
}
.comment-actions li {
  display: inline;
  margin: -2px;
  cursor: pointer;
}
.comment-actions li.complain {
  padding-right: 0.75rem;
  border-right: 1px solid #e1e5eb;
}
.comment-actions li.reply {
  padding-left: 0.75rem;
  padding-right: 0.125rem;
}
.comment-actions li:hover {
  color: #0095ff;
}

</style>
