import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import IconButton from './components/IconButton';

import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [showAppOptions, setShowAppOptions] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [pickedEmoji, setPickedEmoji] = useState(null);


  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {

  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      // console.log(result);
    } else {
      alert('你没有选择任何一张图片');
    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
          { pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> }
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="重置" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ):(
          <View style={styles.footerContainer}>
            <Button theme="primary" label="选择一张图片" onPress={pickImageAsync}/> 
            <Button label="使用这张图片" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320, 
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
      position: 'absolute',
      bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});
