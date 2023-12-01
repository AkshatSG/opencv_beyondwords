from flask import Flask, request, jsonify
import cv2
import numpy as np


app = Flask(__name__)



@app.route('/convert_to_grayscale', methods=['POST'])
def convert_to_grayscale(image_bytes):
    # Convert the byte array to a NumPy array
    nparr = np.frombuffer(image_bytes, np.uint8)

    # Decode the NumPy array into an OpenCV image
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


    return gray

if __name__ == '__main__':
    app.run(ssl_context='adhoc')
