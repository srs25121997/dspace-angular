import { AuthType } from './auth-type';
import { GenericConstructor } from '../shared/generic-constructor';
import { NormalizedAuthStatus } from './models/normalized-auth-status.model';
import { NormalizedEPerson } from '../eperson/models/normalized-eperson.model';
import { NormalizedObject } from '../cache/models/normalized-object.model';
import { CacheableObject } from '../cache/object-cache.reducer';

export class AuthObjectFactory {
  public static getConstructor(type): GenericConstructor<NormalizedObject<CacheableObject>> {
    switch (type) {
      case AuthType.EPerson: {
        return NormalizedEPerson
      }

      case AuthType.Status: {
        return NormalizedAuthStatus
      }

      default: {
        return undefined;
      }
    }
  }
}
