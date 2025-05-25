import speech_recognition as sr

recognizer = sr.Recognizer()
mic = sr.Microphone()

print("Microphone On. (Ctrl+C to stop)")

with mic as source:
    recognizer.adjust_for_ambient_noise(source)
    while True:
        print("Listening...")
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio)
            print("You said:", text)
        except sr.UnknownValueError:
            print("Sorry, I could not understand the audio.")
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
