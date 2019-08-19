from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def main():
  return "<h1>Hello Flask!</h1><p>高雄發大財</p>"

if __name__ == '__main__':
  app.run()