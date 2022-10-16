from collections import deque

SLOUCH_DIFF = 8
AVG_SIZE = 10

class Posture:

    def __init__(self, posture_val):
        self.posture_val = posture_val
        self.recent = deque()
        self.avg = 0

    def set_posture_val(self, posture_val):
        self.posture_val = posture_val

    def new_val(self, posture):
        if len(self.recent) > AVG_SIZE:
            self.recent.popleft()
        
        self.recent.append(posture)
        self.avg = sum(self.recent) / len(self.recent)
    
    def is_slouch(self):
        if (len(self.recent) < AVG_SIZE):
            return False

        return abs(abs(self.avg) - abs(self.posture_val)) > SLOUCH_DIFF
        